import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { connect } from './config/db'
import routes from './routes'

connect()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(routes)

app.listen(process.env.PORT, () => console.log(`Server is up on port ${process.env.PORT}`))
