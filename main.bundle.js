!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){e.exports=require("@babel/runtime/helpers/interopRequireDefault")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PASSWORD_CHECKPASSWORD_DIFFERENT_ERR_RESULT=t.UPDATE_ERR_ERSULT=t.TOKEN_ERR_RESULT=t.LOGIN_ERR_RESULT=t.EMAIL_FOEMAT_ERR_RESULT=t.EMAIL_MUTIPLE_ERR_RESULT=t.SERVER_ERR_RESULT=void 0;t.SERVER_ERR_RESULT={status:"註冊失敗",err:"伺服器錯誤，請稍後在試！"};t.EMAIL_MUTIPLE_ERR_RESULT={status:"註冊失敗",err:"已有重複Email"};t.EMAIL_FOEMAT_ERR_RESULT={status:"註冊失敗。",err:"請輸入正確的Eamil格式。(如1234@email.com)"};t.LOGIN_ERR_RESULT={status:"登入失敗。",err:"請輸入正確的帳號或密碼。"};t.TOKEN_ERR_RESULT={status:"token錯誤。",err:"請重新登入。"};t.UPDATE_ERR_ERSULT={status:"會員資料更新失敗。",err:"伺服器錯誤，請稍後在試！"};t.PASSWORD_CHECKPASSWORD_DIFFERENT_ERR_RESULT={status:"密碼與確認密碼不同",err:"請再重新輸入一次"}},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(r(17)).default.config();var o={mysql:{host:process.env.HOST,user:process.env.DATABASE_USER,password:process.env.DATABASE_PASSWORD,database:process.env.DATABASE},secret:process.env.SECRET};t.default=o},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(4)),s=n(r(21)).default.createConnection({host:o.default.mysql.host,user:o.default.mysql.user,password:o.default.mysql.password,database:o.default.mysql.database});s.connect((function(e){e?(console.log(e),console.log("connecting error")):console.log("connecting success")}));var u=s;t.default=u},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("jsonwebtoken")},function(e,t,r){e.exports=r(9)},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(10)),s=(n(r(11)),n(r(6))),u=n(r(12)),a=n(r(13)),i=n(r(14)),l=n(r(15)),f=n(r(26)),c=n(r(27));n(r(28));(0,f.default)("member:server");var d=(0,s.default)();d.use((0,i.default)("dev")),d.use(s.default.json()),d.use(s.default.urlencoded({extended:!1})),d.set("view engine","ejs"),d.set("views",u.default.join(__dirname,"../src/views")),d.use((0,a.default)()),d.use(s.default.static(u.default.join(__dirname,"../build"))),d.use(s.default.static(u.default.join(__dirname))),d.get("*",(function(e,t){t.render(s.default.static(u.default.join(__dirname,"../build/index.html")))})),d.use("/",l.default),d.use((function(e,t,r){r((0,o.default)(404))})),d.use((function(e,t,r,n){r.locals.message=e.message,r.locals.error="development"===t.app.get("env")?e:{},r.status(e.status||500),r.render("error")}));var p=process.env.PORT||"3100";d.set("port",p);var E=c.default.createServer(d);E.listen(p),E.on("error",(function(e){if("listen"!==e.syscall)throw e;var t="string"==typeof p?"Pipe "+p:"Port "+p;switch(e.code){case"EACCES":console.error(t+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":console.error(t+" is already in use"),process.exit(1);break;default:throw e}})),E.on("listening",(function(){console.log("server start on",p);var e=E.address(),t="string"==typeof e?"pipe "+e:"port "+e.port;(0,f.default)("Listening on "+t)}));var v=d;t.default=v},function(e,t){e.exports=require("http-errors")},function(e,t){e.exports=require("consolidate")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("morgan")},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(6)),s=n(r(16)),u=o.default.Router();console.log("MemberModifyController",(new s.default).postRegister);var a=new s.default;u.post("/register",a.postRegister),u.post("/login",a.postLogin),u.post("/update",a.postUpdate);var i=u;t.default=i},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(1)),s=n(r(2)),u=n(r(4)),a=n(r(18)),i=n(r(22)),l=n(r(23)),f=n(r(7)),c=r(3),d=r(24),p=function(){function e(){(0,o.default)(this,e),this.registerModelClass=new a.default,this.loginModelClass=new i.default,this.updateModelClass=new l.default}return(0,s.default)(e,[{key:"postRegister",value:function(e,t,r){var n={name:e.body.name,email:e.body.email,password:(0,d.setPasswordCryproSHA1)(e.body.password),create_date:(0,d.onTime)()};(0,d.checkEmail)(e.body.email)?this.registerModelClass.registerModel(n).then((function(e){t.json({status:"註冊成功。",result:e})}),(function(e){t.json({result:e})})):t.json({result:c.EMAIL_FOEMAT_ERR_RESULT})}},{key:"postLogin",value:function(e,t,r){var n={email:e.body.email,password:(0,d.setPasswordCryproSHA1)(e.body.password)};this.loginModelClass.memberLogin(n).then((function(e){if(!0===(0,d.checkNull)(e))t.json({result:c.LOGIN_ERR_RESULT});else if(!1===(0,d.checkNull)(e)){var r=f.default.sign({algorithm:"HSA256",exp:Math.floor(Date.now()/1e3)+3600,data:e[0].id},u.default.secret);t.setHeader("token",r),t.json({result:{status:"登入成功。",loginMember:"歡迎 "+e[0].name+" 的登入！"}})}}))}},{key:"postUpdate",value:function(e,t,r){var n=this,o=e.headers.token,s=e.body.password,u=e.body.checkPassword;!0!==(0,d.checkNull)(o)?(0,d.checkVerifyToken)(o).then((function(e){if(e){var r=e;if(s===u){var o=(0,d.setPasswordCryproSHA1)(s);n.updateModelClass.updatePassword(r,o).then((function(e){t.json({result:e})}),(function(e){t.json({result:e})}))}else t.json({result:c.PASSWORD_CHECKPASSWORD_DIFFERENT_ERR_RESULT})}else t.json({result:c.TOKEN_ERR_RESULT})})):t.json({result:c.TOKEN_ERR_RESULT})}}]),e}();t.default=p},function(e,t){e.exports=require("dotenv")},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(19)),s=n(r(20)),u=n(r(1)),a=n(r(2)),i=n(r(5)),l=r(3),f=function(){function e(){(0,u.default)(this,e)}return(0,a.default)(e,[{key:"checkMutipleEmail",value:function(e){return new Promise((function(t,r){var n={};i.default.query("SELECT email from member_info WHERE email = ?",e,(function(e,r){e&&(n={flag:!1,errMsg:l.SERVER_ERR_RESULT},t(n)),r.length>=1&&(n={flag:!1,errMsg:l.EMAIL_MUTIPLE_ERR_RESULT},t(n)),t(n={flag:!0})}))}))}},{key:"registerModel",value:function(e){var t=this,r={};return new Promise(function(){var n=(0,s.default)(o.default.mark((function n(s,u){var a;return o.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.checkMutipleEmail(e.email);case 2:(a=n.sent).flag?i.default.query("INSERT INTO member_info SET ? ",e,(function(t,n){if(t)return r.status="註冊失敗。",r.err="伺服器錯誤，請稍後在試！",void u(r);r.registerMember=e,s(r)})):(r=a.errMsg,s(r));case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())}}]),e}();t.default=f},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("mysql")},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(1)),s=n(r(2)),u=n(r(5)),a=r(3),i=function(){function e(){(0,o.default)(this,e)}return(0,s.default)(e,[{key:"memberLogin",value:function(e){var t={};return new Promise((function(r,n){u.default.query("SELECT * FROM member_info WHERE email = ? AND password = ?",[e.email,e.password],(function(e,o){if(e)return t=a.SERVER_ERR_RESULT,void n(t);r(o)}))}))}}]),e}();t.default=i},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(1)),s=n(r(2)),u=n(r(5)),a=r(3),i=function(){function e(){(0,o.default)(this,e)}return(0,s.default)(e,[{key:"updatePassword",value:function(e,t){var r={};return new Promise((function(n,o){u.default.query("UPDATE member_info SET password = ? WHERE id = ?",[t,e],(function(e,t){return e?(console.log(e),r=a.UPDATE_ERR_ERSULT,void o(r)):(r.status="會員資料更新成功。",void n(r))}))}))}}]),e}();t.default=i},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.checkNull=t.checkVerifyToken=t.setPasswordCryproSHA1=t.checkEmail=t.onTime=void 0;var o=n(r(25)),s=n(r(7)),u=n(r(4));t.onTime=function(){var e=new Date,t=e.getMonth()+1,r=e.getDate(),n=e.getHours(),o=e.getMinutes(),s=e.getSeconds();return[e.getFullYear(),"-"+(t>9?"":"0")+t,"-"+(r>9?"":"0")+r," "+(n>9?"":"0")+n,":"+(o>9?"":"0")+o,":"+(s>9?"":"0")+s].join("")};t.checkEmail=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)};t.setPasswordCryproSHA1=function(e){var t=o.default.createHash("sha1");return t.update(e),t.digest("hex")};t.checkVerifyToken=function(e){var t="",r=Math.floor(Date.now()/1e3);return new Promise((function(n,o){e&&s.default.verify(e,u.default.secret,(function(e,o){t=!e&&(!(o.exp<=r)&&o.data),n(t)}))}))};t.checkNull=function(e){for(var t in e)return!1;return!0}},function(e,t){e.exports=require("crypto")},function(e,t){e.exports=require("debug")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("serve-favicon")}]);