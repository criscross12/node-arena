const express = require('express')
const router = express.Router()
const { entrance } = require('./controller')

router.post('/insert-job', entrance)


module.exports = (app) => {
    app.use('/entrance', router)
}