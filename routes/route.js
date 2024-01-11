const router = require('express').Router();
const {mymailer, getapp} = require('../controller/appController.js');

router.post('/myMailer', mymailer);
router.post('/getApp', getapp);

module.exports = router;