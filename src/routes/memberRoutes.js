import express from 'express'
import MemberModifyController from '../controllers/modify_controller.js'
import BlogController from '../controllers/blog_controller.js'
let router = express.Router()
let memberModifyController = new MemberModifyController()
let blogController = new BlogController
router.post('/blogs', blogController.getBlogs)
router.post('/article', blogController.setArticle)
router.post('/register', memberModifyController.postRegister)
router.post('/login', memberModifyController.postLogin)
router.post('/update', memberModifyController.postUpdate)
export default router