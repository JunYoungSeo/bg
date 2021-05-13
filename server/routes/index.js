const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
	console.log('http://localhost:3002/api/');
	res.send({greeting:'Hello React x Node.js'});
});

module.exports = router;
