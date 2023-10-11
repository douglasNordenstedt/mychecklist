var express = require('express');
var router = express.Router();


const someThing = require('./users').someThing;

let tasks = [{
  id: 1,
  description: "task 1"
},
{
  id: 2,
  description: "task 2"
}
]

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', {title : "CheckMate", tasks});
});


router.get('/users', function(req, res, next) {
  res.json(tasks);
});


router.get('/users/:id', function(req, res, next) {
  const id = req.params.id;
  const task = tasks.find(task => task.id == id);
  res.json(task);
});










module.exports = router;
module.exports.tasks = tasks;