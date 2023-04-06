const express = require('express')
const PORT = 8001
const app = express()
const { db, query } = require("./database")
const cors = require('cors')
const { authRoutes } = require('./routes')
const { body, validationResult } = require('express-validator')
const upload = require('./middleware/multer')

app.use(cors())
app.use(express.json())
app.use(express.static('public'))





app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const { file } = req
        const filepath = file ? '/' + file.filename : null


        let data = JSON.parse(req.body.data)
        console.log(data)

        await query(`UPDATE users SET imagePath = ${db.escape(filepath)} WHERE id_users = ${db.escape(data.id)}`)

        res.status(200).send({ filepath })

    } catch (error) {
        res.status(error.status || 500).send(error)
    }
})




app.post('/validation', body("email").isEmail(), body('password').isLength({ min: 5 }), async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() })
    }
    res.status(200).send(req.body)
})


app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
})