var express = require('express'); //const
var router = express.Router(); //var beofre 
const ctrlMain = require('../controllers/main'); //const ctrlMain

/* GET home page. */
router.get('/', ctrlMain.index); //ctrlMain.index

module.exports = router;