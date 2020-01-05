let express = require('express')
let router = express.Router()
let MemberModifyController = require('../controllers/modify_controller.js')
let memberModifyController = new MemberModifyController()
router.post('/register', memberModifyController.postRegister)
router.post('/login', memberModifyController.postLogin)
router.post('/update', memberModifyController.postUpdate)
module.exports = router