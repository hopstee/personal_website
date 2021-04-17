const nodemailer = require('nodemailer')

require('dotenv').config()
const EMAIL_ADDR = process.env.EMAIL_ADDR
const EMAIL_PASS = process.env.EMAIL_PASS

export default function handler(req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;

    const name_regexp = /^([a-zA-Z]+?\s?)+$/
    const email_regexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    // validate name
    if(name == '') {
        res.status(200).json({ 
            success: false, 
            field: 'name',
            message: 'Name is required'
        })
    }
    if(!name_regexp.test(name)) {
        res.status(200).json({ 
            success: false, 
            field: 'name',
            message: 'Please enter a valid name'
        })
    }

    // validate email
    if(email == '') {
        res.status(200).json({ 
            success: false, 
            field: 'email',
            message: 'Email is required'
        })
    }
    if(!email_regexp.test(email)) {
        res.status(200).json({ 
            success: false, 
            field: 'email',
            message: 'Please enter a valid email'
        })
    }

    // validate message
    if(message == '') {
        res.status(200).json({ 
            success: false, 
            field: 'message',
            message: 'Message is required'
        })
    }

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: EMAIL_ADDR,
            pass: EMAIL_PASS,
        },
        secure: true,
    });

    const mailData = {
        from: `${email}`,
        to: EMAIL_ADDR,
        subject: `Message From ${name}`,
        text: 'Contact',
        html: `<div>${message}</div>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err) {
            res.status(200).json({
                success: false,
                message: info
            })
        }
    })

    res.status(200).json({
        success: true
    })
}