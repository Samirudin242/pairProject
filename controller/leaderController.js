const {Leader, CourseProvider} = require('../models')

class LeaderController {
 static list(req, res) {
     Leader.findAll({
         include:[CourseProvider]
     })
     .then(data => {
        //  res.send(data)
         res.render('leader', {data})
     })
     .catch(err => {
         res.send(err)
     })
 }
}

module.exports = LeaderController