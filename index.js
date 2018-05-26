const express = require('express')
const app = express()
const mailer = require('./mailer')
// Require enviroment variables
require('dotenv').config()
const port = process.env.PORT

app.use(express.json())
app.use('/mailer', mailer)

app.listen(port, (err) => {
  if (err) console.log(err)
  console.log(`App listening on port ${port}`)
})