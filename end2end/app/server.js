import express from 'express'
import render from './serverRender'
const app = express()

app.use('/assets',express.static('assets'))

app.use(render)
app.listen(9999)
