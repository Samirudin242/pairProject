const router = require('express').Router()
const homeController = require('../controller/homeController')
const LeaderRouter = require('../routes/leader')


router.get('/', homeController.home)
router.use('/leaders', LeaderRouter)

module.exports = router
