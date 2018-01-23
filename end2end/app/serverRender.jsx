import React from 'react'
import { StaticRouter, matchPath } from 'react-router'
import { renderToString } from 'react-dom/server'
import createStore from './universal/createStore'
import { Provider } from 'react-redux'
import template from './template'
import App from './universal/App'
import { setUser } from './universal/session/actions'

import actions from './universal/shared/pagination/actions'
import * as customersService from './server/services/customers'
import * as invoicesService from './server/services/invoices'

function preloadedRoutes(store, req) {
    const loadPage = (listId, service) => {
          const { resultsUpdated, setPage } = actions(listId)

            const {
                page = 1,
                pageSize = store.getState()[listId].pageSize
            } =  req.query

            store.dispatch(setPage(page, pageSize))

            return service.list({ page, pageSize}, req.currentUser).then(page => {
                store.dispatch(resultsUpdated(page))
            })
    }
    return [{
        path: '/customers',
        load: () =>  loadPage('customers', customersService) 
    }, {
        path: '/invoices',
        load: () => loadPage('invoices', invoicesService)
    }]
}

function loader(req, store) {
    const route = preloadedRoutes(store, req).find(r => matchPath(req.path, r))

    if (!route || !req.currentUser) {
        return () => Promise.resolve()
    }

    return route.load
} 

export default function render(req, res) {
    const store = createStore(true)

    if (req.currentUser){
    	store.dispatch(setUser(req.currentUser))
    }
    
    const context = {}

    const dataLoader = loader(req, store)

    dataLoader().then(() => {
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

    })

}
