import db from '../connection_db'
import {
    SERVER_ERR_RESULT,
    EMAIL_MUTIPLE_ERR_RESULT
} from '../../contents/result';
class RegisterModelClass {
    // 確認重複Email
    checkMutipleEmail(email) {
        return new Promise((resolve, reject) => {
            let result = {}
            db.query('SELECT email from member_info WHERE email = ?', email, (err, rows) => {
                if (err) {
                    result = {
                        flag: false,
                        errMsg: SERVER_ERR_RESULT
                    }
                    resolve(result)
                }
                if (rows.length >= 1) {
                    result = {
                        flag: false,
                        errMsg: EMAIL_MUTIPLE_ERR_RESULT
                    }
                    resolve(result)
                }
                result = {
                    flag: true
                }
                resolve(result)
            })

        })

    }
    // 註冊（寫入）ＤＢ
    registerModel(memberData) {
        let result = {}
        return new Promise(async (resolve, reject) => {
            let checkEmail = await this.checkMutipleEmail(memberData.email)
            if (checkEmail.flag) {
                // 將資料寫入資料庫
                db.query('INSERT INTO member_info SET ? ', memberData, (err, rows) => {
                    if (err) {
                        result.status = "註冊失敗。"
                        result.err = "伺服器錯誤，請稍後在試！"
                        reject(result);
                        return;
                    }
                    result.registerMember = memberData;
                    resolve(result);
                })
            } else {
                result = checkEmail.errMsg
                resolve(result)
            }
        })
    }
}


export default RegisterModelClass