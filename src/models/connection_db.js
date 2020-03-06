// DataBase
import config from '../config/development_config'
import mysql from 'mysql'
const connection = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
});

connection.connect(err => {
  if (err) {
    console.log(err)
    console.log('connecting error');
  } else {
    console.log('connecting success');
  }
});

export default connection;