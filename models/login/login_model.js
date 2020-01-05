import db from '../connection_db'
import {
    SERVER_ERR_RESULT,
    EMAIL_MUTIPLE_ERR_RESULT
} from '../../contents/result';
class LoginModelClass {
    memberLogin(memberData) {
        let result = {}
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM member_info WHERE email = ? AND password = ?',
                [memberData.email, memberData.password],
                (err, rows) => {
                    if (err) {
                        result = SERVER_ERR_RESULT
                        reject(result)
                        return
                    }
                    resolve(rows)
                }
            )
        })
    }
}

export default LoginModelClass