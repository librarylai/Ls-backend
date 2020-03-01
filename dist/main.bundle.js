module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SERVER_ERR_RESULT={status:"註冊失敗",err:"伺服器錯誤，請稍後在試！"},t.EMAIL_MUTIPLE_ERR_RESULT={status:"註冊失敗",err:"已有重複Email"},t.EMAIL_FOEMAT_ERR_RESULT={status:"註冊失敗。",err:"請輸入正確的Eamil格式。(如1234@email.com)"},t.LOGIN_ERR_RESULT={status:"登入失敗。",err:"請輸入正確的帳號或密碼。"},t.TOKEN_ERR_RESULT={status:"token錯誤。",err:"請重新登入。"},t.UPDATE_ERR_ERSULT={status:"會員資料更新失敗。",err:"伺服器錯誤，請稍後在試！"},t.PASSWORD_CHECKPASSWORD_DIFFERENT_ERR_RESULT={status:"密碼與確認密碼不同",err:"請再重新輸入一次"}},function(e,t,r){"use strict";r(13).config(),e.exports={mysql:{host:process.env.HOST,user:process.env.DATABASE_USER,password:process.env.DATABASE_PASSWORD,database:process.env.DATABASE},secret:process.env.SECRET}},function(e,t,r){"use strict";var n,o=r(1),s=(n=o)&&n.__esModule?n:{default:n};var u=r(15).createConnection({host:s.default.mysql.host,user:s.default.mysql.user,password:s.default.mysql.password,database:s.default.mysql.database});u.connect((function(e){e?(console.log(e),console.log("connecting error")):console.log("connecting success")})),e.exports=u},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("jsonwebtoken")},function(e,t,r){var n=r(6),o=r(20)("member:server"),s=r(21),u=function(e){var t=parseInt(e,10);if(isNaN(t))return e;if(t>=0)return t;return!1}(process.env.PORT||"3100");n.set("port",u);var i=s.createServer(n);i.listen(u),i.on("error",(function(e){if("listen"!==e.syscall)throw e;var t="string"==typeof u?"Pipe "+u:"Port "+u;switch(e.code){case"EACCES":console.error(t+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":console.error(t+" is already in use"),process.exit(1);break;default:throw e}})),i.on("listening",(function(){console.log("server start on",u);var e=i.address(),t="string"==typeof e?"pipe "+e:"port "+e.port;o("Listening on "+t)}))},function(e,t,r){"use strict";(function(t){var n=r(7),o=r(3),s=r(8),u=r(9),i=r(10),a=r(11),c=o();c.set("views",s.join(t,"src/views")),c.set("view engine","ejs"),c.use(i("dev")),c.use(o.json()),c.use(o.urlencoded({extended:!1})),c.use(u()),c.use(o.static(s.join(t,"src/public"))),c.get("/",(function(e,t){t.send("index")})),c.use("/",a),c.use((function(e,t,r){r(n(404))})),c.use((function(e,t,r,n){r.locals.message=e.message,r.locals.error="development"===t.app.get("env")?e:{},r.status(e.status||500),r.render("error")})),e.exports=c}).call(this,"/")},function(e,t){e.exports=require("http-errors")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("morgan")},function(e,t,r){"use strict";var n=r(3).Router(),o=new(r(12));n.post("/register",o.postRegister),n.post("/login",o.postLogin),n.post("/update",o.postUpdate),e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=f(r(1)),s=f(r(14)),u=f(r(16)),i=f(r(17)),a=f(r(4)),c=r(0),l=r(18);function f(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.registerModelClass=new s.default,this.loginModelClass=new u.default,this.updateModelClass=new i.default}return n(e,[{key:"postRegister",value:function(e,t,r){var n={name:e.body.name,email:e.body.email,password:(0,l.setPasswordCryproSHA1)(e.body.password),create_date:(0,l.onTime)()};(0,l.checkEmail)(e.body.email)?this.registerModelClass.registerModel(n).then((function(e){t.json({status:"註冊成功。",result:e})}),(function(e){t.json({result:e})})):t.json({result:c.EMAIL_FOEMAT_ERR_RESULT})}},{key:"postLogin",value:function(e,t,r){var n={email:e.body.email,password:(0,l.setPasswordCryproSHA1)(e.body.password)};this.loginModelClass.memberLogin(n).then((function(e){if(!0===(0,l.checkNull)(e))t.json({result:c.LOGIN_ERR_RESULT});else if(!1===(0,l.checkNull)(e)){var r=a.default.sign({algorithm:"HSA256",exp:Math.floor(Date.now()/1e3)+3600,data:e[0].id},o.default.secret);t.setHeader("token",r),t.json({result:{status:"登入成功。",loginMember:"歡迎 "+e[0].name+" 的登入！"}})}}))}},{key:"postUpdate",value:function(e,t,r){var n=this,o=e.headers.token,s=e.body.password,u=e.body.checkPassword;!0!==(0,l.checkNull)(o)?(0,l.checkVerifyToken)(o).then((function(e){if(e){var r=e;if(s===u){var o=(0,l.setPasswordCryproSHA1)(s);n.updateModelClass.updatePassword(r,o).then((function(e){t.json({result:e})}),(function(e){t.json({result:e})}))}else t.json({result:c.PASSWORD_CHECKPASSWORD_DIFFERENT_ERR_RESULT})}else t.json({result:c.TOKEN_ERR_RESULT})})):t.json({result:c.TOKEN_ERR_RESULT})}}]),e}();t.default=d},function(e,t){e.exports=require("dotenv")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(2),u=(n=s)&&n.__esModule?n:{default:n},i=r(0);var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"checkMutipleEmail",value:function(e){return new Promise((function(t,r){var n={};u.default.query("SELECT email from member_info WHERE email = ?",e,(function(e,r){e&&(n={flag:!1,errMsg:i.SERVER_ERR_RESULT},t(n)),r.length>=1&&(n={flag:!1,errMsg:i.EMAIL_MUTIPLE_ERR_RESULT},t(n)),t(n={flag:!0})}))}))}},{key:"registerModel",value:function(e){var t,r,n=this,o={};return new Promise((t=regeneratorRuntime.mark((function t(r,s){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.checkMutipleEmail(e.email);case 2:(i=t.sent).flag?u.default.query("INSERT INTO member_info SET ? ",e,(function(t,n){if(t)return o.status="註冊失敗。",o.err="伺服器錯誤，請稍後在試！",void s(o);o.registerMember=e,r(o)})):(o=i.errMsg,r(o));case 4:case"end":return t.stop()}}),t,n)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(o,s){try{var u=e[o](s),i=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(i)}("next")}))},function(e,t){return r.apply(this,arguments)}))}}]),e}();t.default=a},function(e,t){e.exports=require("mysql")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(2),u=(n=s)&&n.__esModule?n:{default:n},i=r(0);var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"memberLogin",value:function(e){var t={};return new Promise((function(r,n){u.default.query("SELECT * FROM member_info WHERE email = ? AND password = ?",[e.email,e.password],(function(e,o){if(e)return t=i.SERVER_ERR_RESULT,void n(t);r(o)}))}))}}]),e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(2),u=(n=s)&&n.__esModule?n:{default:n},i=r(0);var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"updatePassword",value:function(e,t){var r={};return new Promise((function(n,o){u.default.query("UPDATE member_info SET password = ? WHERE id = ?",[t,e],(function(e,t){return e?(console.log(e),r=i.UPDATE_ERR_ERSULT,void o(r)):(r.status="會員資料更新成功。",void n(r))}))}))}}]),e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkNull=t.checkVerifyToken=t.setPasswordCryproSHA1=t.checkEmail=t.onTime=void 0;var n=u(r(19)),o=u(r(4)),s=u(r(1));function u(e){return e&&e.__esModule?e:{default:e}}t.onTime=function(){var e=new Date,t=e.getMonth()+1,r=e.getDate(),n=e.getHours(),o=e.getMinutes(),s=e.getSeconds();return[e.getFullYear(),"-"+(t>9?"":"0")+t,"-"+(r>9?"":"0")+r," "+(n>9?"":"0")+n,":"+(o>9?"":"0")+o,":"+(s>9?"":"0")+s].join("")},t.checkEmail=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},t.setPasswordCryproSHA1=function(e){var t=n.default.createHash("sha1");return t.update(e),t.digest("hex")},t.checkVerifyToken=function(e){var t="",r=Math.floor(Date.now()/1e3);return new Promise((function(n,u){e&&o.default.verify(e,s.default.secret,(function(e,o){t=!e&&(!(o.exp<=r)&&o.data),n(t)}))}))},t.checkNull=function(e){for(var t in e)return!1;return!0}},function(e,t){e.exports=require("crypto")},function(e,t){e.exports=require("debug")},function(e,t){e.exports=require("http")}]);