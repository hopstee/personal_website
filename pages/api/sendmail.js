import sendgrid from '@sendgrid/mail';

require('dotenv').config()

const EMAIL_ADDR = process.env.EMAIL_ADDR
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

const nodemailer = require('nodemailer')

export default async function handler(req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;

    const name_regexp = /^([a-zA-Z]+?\s?)+$/
    const email_regexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    // validate name
    if(name == '') {
        return res.status(200).json({ 
            success: false, 
            field: 'name',
            message: 'Name is required'
        })
    }
    if(!name_regexp.test(name)) {
        return res.status(200).json({ 
            success: false, 
            field: 'name',
            message: 'Please enter a valid name'
        })
    }

    // validate email
    if(email == '') {
        return res.status(200).json({ 
            success: false, 
            field: 'email',
            message: 'Email is required'
        })
    }
    if(!email_regexp.test(email)) {
        return res.status(200).json({ 
            success: false, 
            field: 'email',
            message: 'Please enter a valid email'
        })
    }

    // validate message
    if(message == '') {
        return res.status(200).json({ 
            success: false, 
            field: 'message',
            message: 'Message is required'
        })
    }

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
            from: from,
            subject: `${name} send email with contact form`,
            text: message
        });
    } catch (error) {
        return res.status(200).json({
            success: false
        });
    }

    res.status(200).json({
        success: true
    });
}
