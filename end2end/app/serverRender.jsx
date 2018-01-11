import React from 'react'
import { StaticRouter } from 'react-router'
import { renderToString } from 'react-dom/server'
import createStore from './universal/createStore'
import { Provider } from 'react-redux'
import template from './template'
import App from './universal/App'
import { setUser } from './universal/session/actions'

export default function render(req, res) {
    const store = createStore(true)

    if (req.currentUser){
    	store.dispatch(setUser(req.currentUser))
    }
    
    const context = {}

    const html = renderToString(
        <Provider store={store}>
        	<StaticRouter location={req.url} context={context}>
            	<App />
            </StaticRouter>
        </Provider>
    )

    if(context.url){
        res.redirect(301, context.url)
    } else{
        const status = context.status || 200
        res.status(status).send(template(html,store.getState()))
    }
}
