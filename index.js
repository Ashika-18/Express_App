const express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('Welcome to Express!\nやルナら、やらねば！')
})

app.listen(3000, () => {
    console.log('Start sever port: 3000')
})