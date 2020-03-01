import config from '../config/development_config'
import RegisterModelClass from '../models/login/register_model'
import LoginModelClass from '../models/login/login_model'
import UpdateModelClass from '../models/login/update_model'
import jwt from 'jsonwebtoken'
import {
    EMAIL_FOEMAT_ERR_RESULT,
    LOGIN_ERR_RESULT,
    TOKEN_ERR_RESULT,
    PASSWORD_CHECKPASSWORD_DIFFERENT_ERR_RESULT
} from '../contents/result'
import {
    onTime,
    checkNull,
    checkEmail,
    checkVerifyToken,
    setPasswordCryproSHA1
} from '../utils'

let registerModelClass = new RegisterModelClass
let loginModelClass = new LoginModelClass
let updateModelClass = new UpdateModelClass
module.exports = class MemberModifyController {
    postRegister(req, res, next) {
        // 獲取client端資料
        let memberInfoData = {
            name: req.body.name,
            email: req.body.email,
            password: setPasswordCryproSHA1(req.body.password),
            create_date: onTime()
        }
        if (!checkEmail(req.body.email)) {
            res.json({
                result: EMAIL_FOEMAT_ERR_RESULT
            })
        } else {
            registerModelClass.registerModel(memberInfoData).then(result => {
                // 若寫入成功則回傳
                res.json({
                    status: "註冊成功。",
                    result: result
                })
            }, (err) => {
                // 若寫入失敗則回傳
                res.json({
                    result: err
                })
            })
        }
    }
    postLogin(req, res, next) {
        // 獲取client端資料
        let memberInfoData = {
            email: req.body.email,
            password: setPasswordCryproSHA1(req.body.password),
        }
        loginModelClass.memberLogin(memberInfoData).then(rows => {
            if (checkNull(rows) === true) {
                res.json({
                    result: LOGIN_ERR_RESULT
                })
            } else if (checkNull(rows) === false) {
                const token = jwt.sign({
                    algorithm: 'HSA256',
                    exp: Math.floor(Date.now() / 1000) + (60 * 60), // token一個小時後過期。
                    data: rows[0].id
                }, config.secret)
                res.setHeader('token', token)
                res.json({
                    result: {
                        status: "登入成功。",
                        loginMember: "歡迎 " + rows[0].name + " 的登入！",
                    }
                })
            }
        })
    }
    postUpdate(req, res, next) {
        const token = req.headers['token']
        const password = req.body.password
        const checkPassword = req.body.checkPassword

        if (checkNull(token) === true) {
            res.json({
                result: TOKEN_ERR_RESULT
            })
            return
        } else {
            checkVerifyToken(token).then((tokenResult) => {
                if (!tokenResult) {
                    res.json({
                        result: TOKEN_ERR_RESULT
                    })
                    return
                } else {
                    const id = tokenResult
                    if (password !== checkPassword) {
                        res.json({
                            result: PASSWORD_CHECKPASSWORD_DIFFERENT_ERR_RESULT
                        })
                        return
                    }
                    const cryproPassword = setPasswordCryproSHA1(password)
                    updateModelClass.updatePassword(id, cryproPassword).then((result) => {
                        res.json({
                            result: result
                        })
                    }, (err) => {
                        res.json({
                            result: err
                        })
                    })
                }
            })
        }
    }
}