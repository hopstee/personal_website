const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

require('dotenv').config()
const EMAIL_ADDR = process.env.EMAIL_ADDR
const EMAIL_PASS = process.env.EMAIL_PASS
    
app.prepare()
.then(() => {
    const server = express()

    server.post('/sendmail', (req, res) => {

        let nodemailer = require('nodemailer')
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
            from: `${req.body.email}`,
            to: EMAIL_ADDR,
            subject: `Message From ${req.body.name}`,
            text: req.body.subject,
            html: `<div>${req.body.message}</div>`
        }

        transporter.sendMail(mailData, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info)
        })
        
        res.send(200)
    })
        
    server.get('*', (req, res) => {
        return handle(req, res)
    })
        
    server.listen(3001, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3001')
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})