var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(tasks);
});


let tasks = [{
  id: 1,
  description: "task 1"
},
{
  id: 2,
  description: "task 2"
}
]



module.exports = router;
module.exports.tasks = tasks;