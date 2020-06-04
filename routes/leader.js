const router = require('express').Router()
const LeaderController = require('../controller/leaderController')


router.get('/', LeaderController.list)


module.exports = router