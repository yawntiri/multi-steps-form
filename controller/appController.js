// import nodemailer
const nodemailer = require('nodemailer');
const path = require('path');

//import env
const{USER, PASS, TO}= require('../env.js');
const mymailer = (req, res) => {
let config = {
    service: 'gmail',
    auth: {
        user: USER,
        pass: PASS
    }
}
const transporter = nodemailer.createTransport(config)
let message = {
    from: '"Fred Foo 👻" <yawntiri33@gmail.com.com>', // sender address
    to: TO, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Congrats are fully subscribed to the plan", // plain text body
    html: "<b>Congrats are fully subscribed to the plan</b>", // html body
 }

transporter.sendMail(message).then((info)=>{
    res.status(201).json({
        msg:'succesfully send mail',
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info)
    })
})

}




const getapp = (req, res) => {
    console.log(req)
// res.sendFile(__dirname + '/public/index.html');
res.sendFile(path.join(__dirname, '..','public', 'index.html'));
}
const getform = (req, res) => {
    console.log(req.body);

}
module.exports ={mymailer, getapp, getform};