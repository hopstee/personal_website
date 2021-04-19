import { sendMail } from '../../components/sendEmail'

const nodemailer = require('nodemailer')

require('dotenv').config()
const EMAIL_ADDR = process.env.EMAIL_ADDR
const EMAIL_PASS = process.env.EMAIL_PASS
const SENDGRID_API = process.env.SENDGRID_API
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

export default function async handler(req, res) {
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
    const send_email_res = await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  to
                }
              ],
              subject: 'Contact'
            }
          ],
          from: {
            email: from,
            name: name
          },
          content: [
            {
              type: 'text/html',
              value: message
            }
          ]
        })
    });
    
    if(send_email_res) {
        return res.status(200).json({
            success: true
        })
    }
    
    res.status(200).json({
        success: false
    })
}
