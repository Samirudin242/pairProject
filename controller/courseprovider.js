const {CourseProvider, Leader} = require('../models')


class CourseProviderController {
    static list(req, res) {
        CourseProvider.findAll({
            include:[Leader]
        })
        .then(data => {
            // res.send(data)
            res.render('courseprovider', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = CourseProviderController