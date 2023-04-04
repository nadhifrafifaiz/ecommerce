const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "nadhifrafifaiz@gmail.com", pass: "expepesiztyhjckb"
    },
})

module.exports = transporter