import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt-nodejs'
import User from '../models/User'
import verify from './verify'
import secret from './secret'
import { setCsrf, checkCsrf } from './csrf'

function lookup(username = '' ){
    return User.where({username}).fetch().then(user => user && user.toJSON())
}

const api = express.Router()

api.post('/session', (req, res) => {
    const {username, password} = req.body

    lookup(username).then(user => {
        if(!user||!bcrypt.compareSync(password, user.password)){
            res.status(422).json({ code: 'invalid_credentials'})
        } else {
            const { password: _, ...rest} = user
            const token = jwt.sign(rest, secret, { expiresIn: '24h'})
            setCsrf(req,res, ()=>
                res.cookie('auth-token', token, {httpOnly: true}).json({token, user: rest})
            )
        }
    })
})

api.delete('/session', (req, res) => {
	res.clearCookie('auth-token')

	return res.status(200).end()
})

api.use(verify)
api.use(checkCsrf)
api.use(setCsrf)

export default api