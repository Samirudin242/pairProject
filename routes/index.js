const router = require('express').Router()
const homeController = require('../controller/homeController')
const LeaderRouter = require('../routes/leader')
const CourseproviderRouter = require('./courseprovider')

router.get('/', homeController.home)
router.use('/leaders', LeaderRouter)
router.use('/courseproviders', CourseproviderRouter)


module.exports = router
