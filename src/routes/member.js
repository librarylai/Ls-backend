import express from 'express'
let router = express.Router()
import MemberModifyController from '../controllers/modify_controller.js'
console.log('MemberModifyController', new MemberModifyController().postRegister)
let memberModifyController = new MemberModifyController()
router.post('/register', memberModifyController.postRegister)
router.post('/login', memberModifyController.postLogin)
router.post('/update', memberModifyController.postUpdate)
module.exports = router