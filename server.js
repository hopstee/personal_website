const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')

require('dotenv').config()
const EMAIL_ADDR = process.env.EMAIL_ADDR
const EMAIL_PASS = process.env.EMAIL_PASS
const PORT = process.env.PORT || 3001;

const fs = require('fs')
var personal_data;
var projects_data;

// read personal_data.json file
fs.readFile(process.cwd() + '/data/personal_data.json', 'utf8', function(err, data) {
    if(err) throw err;
    personal_data = JSON.parse(data);
});

// read projects.json file
fs.readFile(process.cwd() + '/data/projects.json', 'utf8', function(err, data) {
    if(err) throw err;
    projects_data = JSON.parse(data);
});
    
app.prepare()
.then(() => {
    const server = express()

    server.get('/api/personal', (req ,res) => {
        res.status(200).json({
            data: personal_data
        })
    });

    server.get('/api/projects', (req ,res) => {
        res.status(200).json({
            data: projects_data
        })
    });

    server.get('/api/download_resume', (req ,res) => {
        res.status(200).json({
            data: 'hello'
        })
    });

    server.use(bodyParser.json()).post('/api/sendmail', (req, res) => {
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
            return;
        }
        if(!name_regexp.test(name)) {
            res.status(200).json({ 
                success: false, 
                field: 'name',
                message: 'Please enter a valid name'
            })
            return;
        }

        // validate email
        if(email == '') {
            res.status(200).json({ 
                success: false, 
                field: 'email',
                message: 'Email is required'
            })
            return;
        }
        if(!email_regexp.test(email)) {
            res.status(200).json({ 
                success: false, 
                field: 'email',
                message: 'Please enter a valid email'
            })
            return;
        }

        // validate message
        if(message == '') {
            res.status(200).json({ 
                success: false, 
                field: 'message',
                message: 'Message is required'
            })
            return;
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
    })
        
    server.get('*', (req, res) => {
        return handle(req, res)
    })
        
    server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${PORT}`)
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})
