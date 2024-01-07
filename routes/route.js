const router = require('express').Router();
const {mymailer, getapp, getform} = require('../controller/appController.js');

router.post('/myMailer', mymailer);
router.get('/getApp', getapp);
router.post('/getForm', getform);
module.exports = router;