const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "boysluggish@gmail.com",
        pass: "knwtbyhtovarywou"
    }
})

module.exports = transporter