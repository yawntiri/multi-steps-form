// const router = require('express').Router();
// const {mymailer, getapp} = require('../controller/appController.js');

// router.post('/myMailer', mymailer);
// router.post('/getApp', getapp);

// module.exports = router;


//routes is to be used to handle http requests
const router = require('express').Router();
const {getform} = require('../controller/appController.js');
router.post('/getForm', getform);
module.exports = router;