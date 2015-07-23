var express = require('express');
var router = express.Router();
var quizcontroller = require('../controllers/quiz_controller.js')
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/quizes/question', quizcontroller.question);
router.get('/quizes/answer', quizcontroller.answer);
module.exports = router;

