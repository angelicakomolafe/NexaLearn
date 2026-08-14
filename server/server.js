const express = require('express')

const authRoutes = require('./routes/auth')

const cors = require('cors')

const resultRoutes = require('./routes/results')

require('dotenv').config()

const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())

app.use(express.json())

app.use('/api/auth', authRoutes)

app.use('/api/results', resultRoutes)

app.get('/api/health', (req, res) => {

  res.json({

    status: 'ok',

    message: 'NexaLearn API is running',

  })

})

mongoose
 .connect(process.env.MONGO_URI)
 .then(() => console.log('MongoDB connected'))
 .catch((error) => console.error('MongoDB connection error:', error.message))

app.listen(PORT, () => {

  console.log(`NexaLearn server running on port ${PORT}`)

})
 