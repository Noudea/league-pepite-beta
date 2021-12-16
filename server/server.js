// server.js

require('dotenv').config()
const { createServer } = require('http')
const { parse } = require('url')
const router = require('./router')
const express = require('express')
const connectToDatabase = require('./service/dbconnect')
const next = require('next')
const {urlencoded, json} = require('body-parser')
const dev = process.env.NODE_ENV !== 'production'

const nextApp = next({ dev : dev})
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(async () => {
    const app = express()
    exports.app = app
    app.use(urlencoded({ extended: true }))
    app.use(json())

    router(app)
    app.use(json());
    app.post('/test', function(req, res) {
      res.send('hello wodsqdqrld');
    });
    // All pages handle by nextJS
    app.get('*', (req, res, next) => {
        return handle(req, res, next)
    })

    await connectToDatabase()
    console.log(connectToDatabase)

    app.listen(3000, (err) => {
        console.log('tset')
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})

