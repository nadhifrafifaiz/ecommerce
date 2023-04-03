const express = require('express')
const PORT = 8001
const app = express()
const { db } = require("./database")
const cors = require('cors')
const { authRoutes } = require('./routes')
const { body, validationResult } = require('express-validator')

app.use(cors())

app.use(express.json())


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