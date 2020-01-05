import db from '../connection_db'
import {
    UPDATE_ERR_ERSULT
} from '../../contents/result';
export default class UpdateModelClass {
    updatePassword(id, password) {
        let result = {}
        return new Promise((resolve, reject) => {
            db.query('UPDATE member_info SET password = ? WHERE id = ?', [password, id], (err, rows) => {
                if (err) {
                    console.log(err)
                    result = UPDATE_ERR_ERSULT
                    reject(result)
                    return
                } else {
                    result.status = "會員資料更新成功。"
                    resolve(result)
                    return
                }
            })
        })
    }
}