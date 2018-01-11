import express from 'express'
import morgan from 'morgan'
import cors from 'cors' 
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt-nodejs'
import { decode, apiRoutes } from './server/authentication'
import render from './serverRender'

const app = express()
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:3000', credentials: true}))
app.use(morgan('dev'))
app.use('/api', apiRoutes)
app.use(decode)
app.use('/assets',express.static('assets'))
app.use(render)
app.listen(9999)
