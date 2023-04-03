const express = require('express')
const PORT = 8001
const app = express()
const { db } = require("./database")
const cors = require('cors')
const { authRoutes } = require('./routes')
const multer = require('multer')
const path = require("path")

const { body, validationResult } = require('express-validator')


app.use(cors())

app.use(express.json())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public")
    },
    filename: function (req, file, cb) {
        cb(null, path.parse(file.originalname).name + "-" + Date.now() + path.extname(file.originalname))
    }
})


const upload = multer({ storage })
// app.post('/validation', body('email').isEmail(), async (req, res) => {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ error: errors.array() })
//     }
// })


app.post('/upload', upload.single('file'), (req, res) => {
    console.log("tes")
    console.log(req.file)
})



app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
})