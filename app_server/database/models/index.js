var express = require('express'); //const
var router = express.Router(); //var beofre 
const controller = require('../controllers/main'); //const ctrlMain

/* GET home page. */
router.get('/', controller.index); //ctrlMain.index

module.exports = router;