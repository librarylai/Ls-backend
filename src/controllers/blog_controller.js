import InsertArticleModelClass from '../models/blog/insert_article_modal'
import GetBlogsModelClass from '../models/blog/get_blogs_modal'

import {
    onTime,
} from '../utils'
export default class BlogController {
    constructor() {

    }
    getBlogs(req, res) {
        console.log('blogsssss')
        console.log('GetBlogsModelClass', GetBlogsModelClass)
        GetBlogsModelClass.getBlogs().then((result) => {
            console.log('getBlog', result)
            // res.json(result)
        })
    }
    setArticle(req, res, next) {
        let articleInfoData = {
            title: req.body.title,
            content: req.body.content,
            create_date: onTime()
        }
        InsertArticleModelClass.insertArticle(articleInfoData).then((result) => {
            console.log('result', result)
        })
    }
}