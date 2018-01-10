import React from 'react'
import { renderToString } from 'react-dom/server'
import createStore from './universal/createStore'
import { Provider } from 'react-redux'
import template from './template'
import RGB from './universal/RGB'
import { setUser } from './universal/session/actions'

export default function render(req, res) {
    const store = createStore(true)

    if (req.currentUser){
    	store.dispatch(setUsert(req.currentUser))
    }

    const html = renderToString(
        <Provider store={store}>
        	<div style={{ padding: '1rem'}}>
            	<Home />
            </div>
        </Provider>
    )
    res.send(template(html,store.getState()))
}
