import sendgrid from '@sendgrid/mail';

require('dotenv').config()

const EMAIL_ADDR = process.env.EMAIL_ADDR
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

const nodemailer = require('nodemailer')

export default async function handler(req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;

//     nodemailer version
//     const transporter = nodemailer.createTransport({
//         port: 465,
//         host: "smtp.gmail.com",
//         auth: {
//             user: EMAIL_ADDR,
//             pass: EMAIL_PASS,
//         },
//         secure: true,
//     });

//     const mailData = {
//         from: `${email}`,
//         to: EMAIL_ADDR,
//         subject: `Message From ${name}`,
//         text: 'Contact',
//         html: `<div>${message}</div>`
//     }

//     transporter.sendMail(mailData, function (err, info) {
//         if(err) {
//             res.status(200).json({
//                 success: false,
//                 message: info
//             })
//         }
//     })
//     nodemailer version
    
//     sendgrid version
    
//     sendgrid version
    sendgrid.setApiKey(SENDGRID_API_KEY);
    try {
        await sendgrid.send({
            to: EMAIL_ADDR,
            from: email,
            subject: `${name} send email with contact form`,
            text: message
        });
    } catch (error) {
        return res.status(200).json({
            error: error,
            success: false
        });
    }

    res.status(200).json({
        success: true
    });
}
