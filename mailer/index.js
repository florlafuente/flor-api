const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
// Require enviroment variables
require('dotenv').config()
const {
  SMTP_HOST,
  SMTP_USERNAME,
  SMTP_PORT,
  SMTP_PASSWORD,
  SMTP_FROM_ADDRESS,
  SMTP_TO_ADDRESS
} = process.env


router.post('/', (req, res) => {
  let transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD
    }
  })
  let mailOptions = {
    to: SMTP_TO_ADDRESS,
    from: SMTP_FROM_ADDRESS,
    subject: 'Contacto',
    html: '<p>Hola, soy un mensaje</p>'
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) res.status(500).send()
    console.log('Message %s sent: %s', info.messageId, info.response)
    res.status(200).send()
  })
})

module.exports = router