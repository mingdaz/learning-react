import express from 'express'
import morgan from 'morgan'
import cors from 'cors' 
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt-nodejs'
import { decode, apiRoutes } from './server/authentication'
import render from './serverRender'
import customersController from './server/controllers/customers'
import invoicesController from './server/controllers/invoices'
import ValidationException from './server/models/ValidationException'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:3000', credentials: true}))
app.use(morgan('dev'))
app.use(decode)
app.use('/api', apiRoutes)
customersController(apiRoutes)
invoicesController(apiRoutes)
apiRoutes.use((err, _, res, next) => {
	if (err instanceof ValidationException) {
		res.status(422).json({ errors: err.errors})
	} else {
		next(err)
	}
})
app.use('/assets',express.static('assets'))
app.use(render)
app.listen(9999)
