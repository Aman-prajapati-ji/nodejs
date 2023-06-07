const exp = require('express')
const path = require('path')

const express = exp()

const staticPath = path.join(__dirname + ``)

express.use('/', express.static(staticPath))

