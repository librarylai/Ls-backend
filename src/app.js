import createError from 'http-errors'
import consolidate from 'consolidate';
import express from 'express'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import memberRouter from './routes/member'
import debug from 'debug';
import http from 'http';
import favicon from 'serve-favicon';
debug('member:server')

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));

// app.engine('html', consolidate.mustache);
// app.set('view engine', 'html');
// app.set('views', path.join(__dirname, 'build'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../src/build')))
console.log(path.join(__dirname, '../src/views'));
// app.use(favicon(path.join(__dirname, '../src/build/favicon.ico')));
app.get('*', function (req, res) {
  // res.render(path.join(__dirname + '/build/index.html'))
  res.render('../src/build/index.html')

})
app.use('/', memberRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
/*... Server Setting Block ...*/
var port = process.env.PORT || '3100';

app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  console.log('server start on', port)
  var addr = server.address();
  var bind = typeof addr === 'string' ?
    'pipe ' + addr :
    'port ' + addr.port;
  debug('Listening on ' + bind);
}
export default app;