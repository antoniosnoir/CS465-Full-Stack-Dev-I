const express = require('express'); //const
const router = express.Router(); //var beofre 
const ctrlMain = require('../controllers/main'); //const ctrlMain

// GET home page.
//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
//});

//const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index); //ctrlMain.index

module.exports = router;
