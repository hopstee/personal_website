require('dotenv').config()

const SENDGRID_API = process.env.SENDGRID_API
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

const sendEmail = async ({ from, name, to, message }) => {
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
}

export { sendEmail };
