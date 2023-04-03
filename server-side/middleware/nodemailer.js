//Handle Send Verification Email
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "nadhifrafifaiz@gmail.com", pass: "expepesiztyhjckb" },
    tls: { rejectUnauthorized: false },
});

module.exports = transporter;
