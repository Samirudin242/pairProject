const router = require('express').Router()
const CourseController = require('../controller/courseprovider')


router.get('/', CourseController.list)


module.exports = router