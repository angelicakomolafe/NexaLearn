const express = require('express')

const Result = require('../models/Result')

const auth = require('../middleware/auth')

const router = express.Router()

router.post('/', auth, async (req, res) => {

  try {

    const { course, score } = req.body

    if (!course || score === undefined) {

      return res.status(400).json({

        message: 'Course and score are required',

      })

    }

    const result = await Result.create({

      userId: req.userId,

      course,

      score,

    })

    res.status(201).json({

      message: 'Result saved successfully',

      result,

    })

  } catch (error) {

    console.error(error)

    res.status(500).json({ message: 'Server error' })

  }

})

router.get('/', auth, async (req, res) => {

  try {

    const results = await Result.find({

      userId: req.userId,

    }).sort({ createdAt: -1 })

    res.json(results)

  } catch (error) {

    res.status(500).json({ message: 'Server error' })

  }

})

module.exports = router
 