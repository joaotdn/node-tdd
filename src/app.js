/**
 * * Responsibility: Start Express and execute middlewares
 */
import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()
app.use(bodyParser.json())
// all requests management with routes
app.use('/', routes)

// export app like a module
module.exports = app