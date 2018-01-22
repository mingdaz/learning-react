import React from 'react'
import {render} from 'react-dom'
import createStore from './universal/createStore'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './universal/App'
import { setUser } from './universal/session/actions'
import api from './universal/api'
import './app.scss'

const store = createStore()

// api.session.info()

const serializedUser = window.localStorage.getItem('user')
if (serializedUser){
	store.dispatch(setUser(JSON.parse(serializedUser)))
}

render(
    <Provider store={store}>
    	<BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
	document.getElementById('app')
)
