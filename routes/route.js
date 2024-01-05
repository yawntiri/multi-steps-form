const route = require('express').Router();
const nodemailer = require('../controller/nodemailer.js')

route.get('/mail/nodeMailer', nodemailer);

module.exports = {route};
