import db from '../connection_db'
import {
    SERVER_ERR_RESULT,
    EMAIL_MUTIPLE_ERR_RESULT
} from '../../contents/result';
class InsertArticleModelClass {
    insertArticle(articleData) {
        let result = {}
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO article_info SET ? ', articleData, (err, rows) => {
                if (err) {
                    result.status = "新增文章失敗。"
                    result.err = "伺服器錯誤，請稍後在試！"
                    reject(result);
                    return;
                }
                result.articleInfo = articleData;
                resolve(result);
            })
        })
    }
}


export default new InsertArticleModelClass