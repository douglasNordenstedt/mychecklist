var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(tasks);
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  const task = tasks.find(task => task.id == id);
  res.json(task);
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