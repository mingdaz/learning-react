import React from 'react'
import RGB from './universal/RGB'
import { renderToString } from 'react-dom/server'
import template from './template'

export default function render(req, res) {
    const html = renderToString(<RGB/>)
    res.send(template(html))
}
