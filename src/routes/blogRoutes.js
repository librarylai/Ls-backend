import express from 'express'
import BlogController from '../controllers/blog_controller.js'
let router = express.Router()
let blogController = new BlogController
router.get('/blogs', blogController.getBlogs)
router.post('/article', blogController.setArticle)
export default router