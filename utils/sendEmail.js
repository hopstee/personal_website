require('dotenv').config()

const EMAIL_ADDR = process.env.EMAIL_ADDR
const SENDGRID_API = process.env.SENDGRID_API
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

const sendEmail = async ({ from, name, message }) => {
    await fetch(SENDGRID_API, {
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
                            EMAIL_ADDR
                        }
                    ],
                    subject: 'edkr Contact form'
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
}

export { sendEmail };