module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _httpErrors = _interopRequireDefault(__webpack_require__(/*! http-errors */ \"http-errors\"));\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _cookieParser = _interopRequireDefault(__webpack_require__(/*! cookie-parser */ \"cookie-parser\"));\n\nvar _morgan = _interopRequireDefault(__webpack_require__(/*! morgan */ \"morgan\"));\n\nvar _member = _interopRequireDefault(__webpack_require__(/*! ./src/routes/member */ \"./src/routes/member.js\"));\n\nvar _debug = _interopRequireDefault(__webpack_require__(/*! debug */ \"debug\"));\n\nvar _http = _interopRequireDefault(__webpack_require__(/*! http */ \"http\"));\n\n// var createError = require('http-errors');\n// var express = require('express');\n// var path = require('path');\n// var cookieParser = require('cookie-parser');\n// var logger = require('morgan');\n// let memberRouter = require('./src/routes/member')\nvar app = (0, _express[\"default\"])(); // view engine setup\n\napp.set('views', _path[\"default\"].join(__dirname, 'src/views'));\napp.set('view engine', 'ejs');\napp.use((0, _morgan[\"default\"])('dev'));\napp.use(_express[\"default\"].json());\napp.use(_express[\"default\"].urlencoded({\n  extended: false\n}));\napp.use((0, _cookieParser[\"default\"])());\napp.use(_express[\"default\"][\"static\"](_path[\"default\"].join(__dirname, 'src/public')));\napp.get('/', function (req, res) {\n  res.send('index');\n});\napp.use('/', _member[\"default\"]); // catch 404 and forward to error handler\n\napp.use(function (req, res, next) {\n  next((0, _httpErrors[\"default\"])(404));\n}); // error handler\n\napp.use(function (err, req, res, next) {\n  // set locals, only providing error in development\n  res.locals.message = err.message;\n  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page\n\n  res.status(err.status || 500);\n  res.render('error');\n});\nvar _default = app;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./bin/www":
/*!*****************!*\
  !*** ./bin/www ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ \"./app.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);\n// usr/bin/env node\n\n/**\n * Module dependencies.\n */\n// var app = require('../app');\n// var debug = require('debug')('member:server');\n// var http = require('http');\n\n\n\ndebug__WEBPACK_IMPORTED_MODULE_1___default()('member:server')\n/**\n * Get port from environment and store in Express.\n */\n// var port = normalizePort(process.env.PORT || '3100');\nvar port = process.env.PORT || '3100';\n\n_app__WEBPACK_IMPORTED_MODULE_0___default.a.set('port', port);\n\n/**\n * Create HTTP server.\n */\n\nvar server = http__WEBPACK_IMPORTED_MODULE_2___default.a.createServer(_app__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n/**\n * Listen on provided port, on all network interfaces.\n */\n\nserver.listen(port);\nserver.on('error', onError);\nserver.on('listening', onListening);\n\n/**\n * Normalize a port into a number, string, or false.\n */\n\nfunction normalizePort(val) {\n  var port = parseInt(val, 10);\n\n  if (isNaN(port)) {\n    // named pipe\n    return val;\n  }\n\n  if (port >= 0) {\n    // port number\n    return port;\n  }\n\n  return false;\n}\n\n/**\n * Event listener for HTTP server \"error\" event.\n */\n\nfunction onError(error) {\n  if (error.syscall !== 'listen') {\n    throw error;\n  }\n\n  var bind = typeof port === 'string' ?\n    'Pipe ' + port :\n    'Port ' + port;\n\n  // handle specific listen errors with friendly messages\n  switch (error.code) {\n    case 'EACCES':\n      console.error(bind + ' requires elevated privileges');\n      process.exit(1);\n      break;\n    case 'EADDRINUSE':\n      console.error(bind + ' is already in use');\n      process.exit(1);\n      break;\n    default:\n      throw error;\n  }\n}\n\n/**\n * Event listener for HTTP server \"listening\" event.\n */\n\nfunction onListening() {\n  console.log('server start on', port)\n  var addr = server.address();\n  var bind = typeof addr === 'string' ?\n    'pipe ' + addr :\n    'port ' + addr.port;\n  debug__WEBPACK_IMPORTED_MODULE_1___default()('Listening on ' + bind);\n}\n\n//# sourceURL=webpack:///./bin/www?");

/***/ }),

/***/ "./src/config/development_config.js":
/*!******************************************!*\
  !*** ./src/config/development_config.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dotenv = _interopRequireDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\n\n_dotenv[\"default\"].config(); // import config from 'dotenv'\n\n\nvar _default = {\n  mysql: {\n    host: process.env.HOST,\n    user: process.env.DATABASE_USER,\n    password: process.env.DATABASE_PASSWORD,\n    database: process.env.DATABASE\n  },\n  secret: process.env.SECRET\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/config/development_config.js?");

/***/ }),

/***/ "./src/contents/result.js":
/*!********************************!*\
  !*** ./src/contents/result.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PASSWORD_CHECKPASSWORD_DIFFERENT_ERR_RESULT = exports.UPDATE_ERR_ERSULT = exports.TOKEN_ERR_RESULT = exports.LOGIN_ERR_RESULT = exports.EMAIL_FOEMAT_ERR_RESULT = exports.EMAIL_MUTIPLE_ERR_RESULT = exports.SERVER_ERR_RESULT = void 0;\nvar SERVER_ERR_RESULT = {\n  status: \"註冊失敗\",\n  err: \"伺服器錯誤，請稍後在試！\"\n};\nexports.SERVER_ERR_RESULT = SERVER_ERR_RESULT;\nvar EMAIL_MUTIPLE_ERR_RESULT = {\n  status: \"註冊失敗\",\n  err: \"已有重複Email\"\n};\nexports.EMAIL_MUTIPLE_ERR_RESULT = EMAIL_MUTIPLE_ERR_RESULT;\nvar EMAIL_FOEMAT_ERR_RESULT = {\n  status: \"註冊失敗。\",\n  err: \"請輸入正確的Eamil格式。(如1234@email.com)\"\n};\nexports.EMAIL_FOEMAT_ERR_RESULT = EMAIL_FOEMAT_ERR_RESULT;\nvar LOGIN_ERR_RESULT = {\n  status: \"登入失敗。\",\n  err: \"請輸入正確的帳號或密碼。\"\n};\nexports.LOGIN_ERR_RESULT = LOGIN_ERR_RESULT;\nvar TOKEN_ERR_RESULT = {\n  status: \"token錯誤。\",\n  err: \"請重新登入。\"\n};\nexports.TOKEN_ERR_RESULT = TOKEN_ERR_RESULT;\nvar UPDATE_ERR_ERSULT = {\n  status: '會員資料更新失敗。',\n  err: \"伺服器錯誤，請稍後在試！\"\n};\nexports.UPDATE_ERR_ERSULT = UPDATE_ERR_ERSULT;\nvar PASSWORD_CHECKPASSWORD_DIFFERENT_ERR_RESULT = {\n  status: '密碼與確認密碼不同',\n  err: '請再重新輸入一次'\n};\nexports.PASSWORD_CHECKPASSWORD_DIFFERENT_ERR_RESULT = PASSWORD_CHECKPASSWORD_DIFFERENT_ERR_RESULT;\n\n//# sourceURL=webpack:///./src/contents/result.js?");

/***/ }),

/***/ "./src/controllers/modify_controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/modify_controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\"));\n\nvar _development_config = _interopRequireDefault(__webpack_require__(/*! ../config/development_config */ \"./src/config/development_config.js\"));\n\nvar _register_model = _interopRequireDefault(__webpack_require__(/*! ../models/login/register_model */ \"./src/models/login/register_model.js\"));\n\nvar _login_model = _interopRequireDefault(__webpack_require__(/*! ../models/login/login_model */ \"./src/models/login/login_model.js\"));\n\nvar _update_model = _interopRequireDefault(__webpack_require__(/*! ../models/login/update_model */ \"./src/models/login/update_model.js\"));\n\nvar _jsonwebtoken = _interopRequireDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\n\nvar _result = __webpack_require__(/*! ../contents/result */ \"./src/contents/result.js\");\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nvar MemberModifyController = /*#__PURE__*/function () {\n  function MemberModifyController() {\n    (0, _classCallCheck2[\"default\"])(this, MemberModifyController);\n    this.registerModelClass = new _register_model[\"default\"]();\n    this.loginModelClass = new _login_model[\"default\"]();\n    this.updateModelClass = new _update_model[\"default\"]();\n  }\n\n  (0, _createClass2[\"default\"])(MemberModifyController, [{\n    key: \"postRegister\",\n    value: function postRegister(req, res, next) {\n      // 獲取client端資料\n      var memberInfoData = {\n        name: req.body.name,\n        email: req.body.email,\n        password: (0, _utils.setPasswordCryproSHA1)(req.body.password),\n        create_date: (0, _utils.onTime)()\n      };\n\n      if (!(0, _utils.checkEmail)(req.body.email)) {\n        res.json({\n          result: _result.EMAIL_FOEMAT_ERR_RESULT\n        });\n      } else {\n        this.registerModelClass.registerModel(memberInfoData).then(function (result) {\n          // 若寫入成功則回傳\n          res.json({\n            status: \"註冊成功。\",\n            result: result\n          });\n        }, function (err) {\n          // 若寫入失敗則回傳\n          res.json({\n            result: err\n          });\n        });\n      }\n    }\n  }, {\n    key: \"postLogin\",\n    value: function postLogin(req, res, next) {\n      // 獲取client端資料\n      var memberInfoData = {\n        email: req.body.email,\n        password: (0, _utils.setPasswordCryproSHA1)(req.body.password)\n      };\n      this.loginModelClass.memberLogin(memberInfoData).then(function (rows) {\n        if ((0, _utils.checkNull)(rows) === true) {\n          res.json({\n            result: _result.LOGIN_ERR_RESULT\n          });\n        } else if ((0, _utils.checkNull)(rows) === false) {\n          var token = _jsonwebtoken[\"default\"].sign({\n            algorithm: 'HSA256',\n            exp: Math.floor(Date.now() / 1000) + 60 * 60,\n            // token一個小時後過期。\n            data: rows[0].id\n          }, _development_config[\"default\"].secret);\n\n          res.setHeader('token', token);\n          res.json({\n            result: {\n              status: \"登入成功。\",\n              loginMember: \"歡迎 \" + rows[0].name + \" 的登入！\"\n            }\n          });\n        }\n      });\n    }\n  }, {\n    key: \"postUpdate\",\n    value: function postUpdate(req, res, next) {\n      var _this = this;\n\n      var token = req.headers['token'];\n      var password = req.body.password;\n      var checkPassword = req.body.checkPassword;\n\n      if ((0, _utils.checkNull)(token) === true) {\n        res.json({\n          result: _result.TOKEN_ERR_RESULT\n        });\n        return;\n      } else {\n        (0, _utils.checkVerifyToken)(token).then(function (tokenResult) {\n          if (!tokenResult) {\n            res.json({\n              result: _result.TOKEN_ERR_RESULT\n            });\n            return;\n          } else {\n            var id = tokenResult;\n\n            if (password !== checkPassword) {\n              res.json({\n                result: _result.PASSWORD_CHECKPASSWORD_DIFFERENT_ERR_RESULT\n              });\n              return;\n            }\n\n            var cryproPassword = (0, _utils.setPasswordCryproSHA1)(password);\n\n            _this.updateModelClass.updatePassword(id, cryproPassword).then(function (result) {\n              res.json({\n                result: result\n              });\n            }, function (err) {\n              res.json({\n                result: err\n              });\n            });\n          }\n        });\n      }\n    }\n  }]);\n  return MemberModifyController;\n}();\n\nexports[\"default\"] = MemberModifyController;\n\n//# sourceURL=webpack:///./src/controllers/modify_controller.js?");

/***/ }),

/***/ "./src/models/connection_db.js":
/*!*************************************!*\
  !*** ./src/models/connection_db.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nvar _development_config = _interopRequireDefault(__webpack_require__(/*! ../config/development_config */ \"./src/config/development_config.js\"));\n\n// DataBase\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\n\nvar connection = mysql.createConnection({\n  host: _development_config[\"default\"].mysql.host,\n  user: _development_config[\"default\"].mysql.user,\n  password: _development_config[\"default\"].mysql.password,\n  database: _development_config[\"default\"].mysql.database\n});\nconnection.connect(function (err) {\n  if (err) {\n    console.log(err);\n    console.log('connecting error');\n  } else {\n    console.log('connecting success');\n  }\n});\nmodule.exports = connection;\n\n//# sourceURL=webpack:///./src/models/connection_db.js?");

/***/ }),

/***/ "./src/models/login/login_model.js":
/*!*****************************************!*\
  !*** ./src/models/login/login_model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\"));\n\nvar _connection_db = _interopRequireDefault(__webpack_require__(/*! ../connection_db */ \"./src/models/connection_db.js\"));\n\nvar _result = __webpack_require__(/*! ../../contents/result */ \"./src/contents/result.js\");\n\nvar LoginModelClass = /*#__PURE__*/function () {\n  function LoginModelClass() {\n    (0, _classCallCheck2[\"default\"])(this, LoginModelClass);\n  }\n\n  (0, _createClass2[\"default\"])(LoginModelClass, [{\n    key: \"memberLogin\",\n    value: function memberLogin(memberData) {\n      var result = {};\n      return new Promise(function (resolve, reject) {\n        _connection_db[\"default\"].query('SELECT * FROM member_info WHERE email = ? AND password = ?', [memberData.email, memberData.password], function (err, rows) {\n          if (err) {\n            result = _result.SERVER_ERR_RESULT;\n            reject(result);\n            return;\n          }\n\n          resolve(rows);\n        });\n      });\n    }\n  }]);\n  return LoginModelClass;\n}();\n\nvar _default = LoginModelClass;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/models/login/login_model.js?");

/***/ }),

/***/ "./src/models/login/register_model.js":
/*!********************************************!*\
  !*** ./src/models/login/register_model.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\"));\n\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\"));\n\nvar _connection_db = _interopRequireDefault(__webpack_require__(/*! ../connection_db */ \"./src/models/connection_db.js\"));\n\nvar _result = __webpack_require__(/*! ../../contents/result */ \"./src/contents/result.js\");\n\nvar RegisterModelClass = /*#__PURE__*/function () {\n  function RegisterModelClass() {\n    (0, _classCallCheck2[\"default\"])(this, RegisterModelClass);\n  }\n\n  (0, _createClass2[\"default\"])(RegisterModelClass, [{\n    key: \"checkMutipleEmail\",\n    // 確認重複Email\n    value: function checkMutipleEmail(email) {\n      return new Promise(function (resolve, reject) {\n        var result = {};\n\n        _connection_db[\"default\"].query('SELECT email from member_info WHERE email = ?', email, function (err, rows) {\n          if (err) {\n            result = {\n              flag: false,\n              errMsg: _result.SERVER_ERR_RESULT\n            };\n            resolve(result);\n          }\n\n          if (rows.length >= 1) {\n            result = {\n              flag: false,\n              errMsg: _result.EMAIL_MUTIPLE_ERR_RESULT\n            };\n            resolve(result);\n          }\n\n          result = {\n            flag: true\n          };\n          resolve(result);\n        });\n      });\n    } // 註冊（寫入）ＤＢ\n\n  }, {\n    key: \"registerModel\",\n    value: function registerModel(memberData) {\n      var _this = this;\n\n      var result = {};\n      return new Promise( /*#__PURE__*/function () {\n        var _ref = (0, _asyncToGenerator2[\"default\"])( /*#__PURE__*/_regenerator[\"default\"].mark(function _callee(resolve, reject) {\n          var checkEmail;\n          return _regenerator[\"default\"].wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return _this.checkMutipleEmail(memberData.email);\n\n                case 2:\n                  checkEmail = _context.sent;\n\n                  if (checkEmail.flag) {\n                    // 將資料寫入資料庫\n                    _connection_db[\"default\"].query('INSERT INTO member_info SET ? ', memberData, function (err, rows) {\n                      if (err) {\n                        result.status = \"註冊失敗。\";\n                        result.err = \"伺服器錯誤，請稍後在試！\";\n                        reject(result);\n                        return;\n                      }\n\n                      result.registerMember = memberData;\n                      resolve(result);\n                    });\n                  } else {\n                    result = checkEmail.errMsg;\n                    resolve(result);\n                  }\n\n                case 4:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function (_x, _x2) {\n          return _ref.apply(this, arguments);\n        };\n      }());\n    }\n  }]);\n  return RegisterModelClass;\n}();\n\nvar _default = RegisterModelClass;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/models/login/register_model.js?");

/***/ }),

/***/ "./src/models/login/update_model.js":
/*!******************************************!*\
  !*** ./src/models/login/update_model.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\"));\n\nvar _connection_db = _interopRequireDefault(__webpack_require__(/*! ../connection_db */ \"./src/models/connection_db.js\"));\n\nvar _result = __webpack_require__(/*! ../../contents/result */ \"./src/contents/result.js\");\n\nvar UpdateModelClass = /*#__PURE__*/function () {\n  function UpdateModelClass() {\n    (0, _classCallCheck2[\"default\"])(this, UpdateModelClass);\n  }\n\n  (0, _createClass2[\"default\"])(UpdateModelClass, [{\n    key: \"updatePassword\",\n    value: function updatePassword(id, password) {\n      var result = {};\n      return new Promise(function (resolve, reject) {\n        _connection_db[\"default\"].query('UPDATE member_info SET password = ? WHERE id = ?', [password, id], function (err, rows) {\n          if (err) {\n            console.log(err);\n            result = _result.UPDATE_ERR_ERSULT;\n            reject(result);\n            return;\n          } else {\n            result.status = \"會員資料更新成功。\";\n            resolve(result);\n            return;\n          }\n        });\n      });\n    }\n  }]);\n  return UpdateModelClass;\n}();\n\nexports[\"default\"] = UpdateModelClass;\n\n//# sourceURL=webpack:///./src/models/login/update_model.js?");

/***/ }),

/***/ "./src/routes/member.js":
/*!******************************!*\
  !*** ./src/routes/member.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _modify_controller = _interopRequireDefault(__webpack_require__(/*! ../controllers/modify_controller.js */ \"./src/controllers/modify_controller.js\"));\n\nvar router = _express[\"default\"].Router();\n\nconsole.log('MemberModifyController', new _modify_controller[\"default\"]().postRegister);\nvar memberModifyController = new _modify_controller[\"default\"]();\nrouter.post('/register', memberModifyController.postRegister);\nrouter.post('/login', memberModifyController.postLogin);\nrouter.post('/update', memberModifyController.postUpdate);\nvar _default = router;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/routes/member.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.checkNull = exports.checkVerifyToken = exports.setPasswordCryproSHA1 = exports.checkEmail = exports.onTime = void 0;\n\nvar _crypto = _interopRequireDefault(__webpack_require__(/*! crypto */ \"crypto\"));\n\nvar _jsonwebtoken = _interopRequireDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\n\nvar _development_config = _interopRequireDefault(__webpack_require__(/*! ./config/development_config */ \"./src/config/development_config.js\"));\n\nvar onTime = function onTime() {\n  var date = new Date();\n  var mm = date.getMonth() + 1;\n  var dd = date.getDate();\n  var hh = date.getHours();\n  var mi = date.getMinutes();\n  var ss = date.getSeconds();\n  return [date.getFullYear(), \"-\" + (mm > 9 ? '' : '0') + mm, \"-\" + (dd > 9 ? '' : '0') + dd, \" \" + (hh > 9 ? '' : '0') + hh, \":\" + (mi > 9 ? '' : '0') + mi, \":\" + (ss > 9 ? '' : '0') + ss].join('');\n};\n\nexports.onTime = onTime;\n\nvar checkEmail = function checkEmail(email) {\n  var re = /^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n  var result = re.test(email);\n  return result;\n};\n\nexports.checkEmail = checkEmail;\n\nvar setPasswordCryproSHA1 = function setPasswordCryproSHA1(password) {\n  var hashPassword = _crypto[\"default\"].createHash('sha1');\n\n  hashPassword.update(password);\n  var rePassword = hashPassword.digest('hex');\n  return rePassword;\n};\n\nexports.setPasswordCryproSHA1 = setPasswordCryproSHA1;\n\nvar checkVerifyToken = function checkVerifyToken(token) {\n  var tokenResult = '';\n  var time = Math.floor(Date.now() / 1000);\n  return new Promise(function (resolve, reject) {\n    if (!token) return;\n\n    _jsonwebtoken[\"default\"].verify(token, _development_config[\"default\"].secret, function (err, decoded) {\n      if (err) {\n        tokenResult = false;\n      } else if (decoded.exp <= time) {\n        tokenResult = false;\n      } else {\n        tokenResult = decoded.data;\n      }\n\n      resolve(tokenResult);\n    });\n  });\n}; //判斷空值\n\n\nexports.checkVerifyToken = checkVerifyToken;\n\nvar checkNull = function checkNull(data) {\n  for (var key in data) {\n    // 不為空\n    return false;\n  } // 為空值\n\n\n  return true;\n};\n\nexports.checkNull = checkNull;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./app.js ./bin/www ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./app.js */\"./app.js\");\nmodule.exports = __webpack_require__(/*! ./bin/www */\"./bin/www\");\n\n\n//# sourceURL=webpack:///multi_./app.js_./bin/www?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireDefault":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireDefault" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/interopRequireDefault\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/interopRequireDefault%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-errors\");\n\n//# sourceURL=webpack:///external_%22http-errors%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });