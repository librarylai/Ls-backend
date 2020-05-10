import db from '../connection_db'

class GetBlogsModelClass {
    getBlogs() {
        let result = {}
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM article_info', (err, res) => {
                console.log(err)
                console.log(res)
                if (err) {
                    result.status = "獲取文章失敗。"
                    result.err = "伺服器錯誤，請稍後在試！"
                    reject(result);
                    return;
                }
                result.rtnMsg = res;
                resolve(result);
            })
        })
    }
}


export default new GetBlogsModelClass