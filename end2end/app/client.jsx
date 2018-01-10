import React from 'react'
import {render} from 'react-dom'
import createStore from './universal/createStore'
import { Provider } from 'react-redux'
import Home from './universal/Home'
import { setUser } from './universal/session/actions'
import api from './universal/api'
import './app.scss'

const store = createStore()

api.session.info()

const serializedUser = window.localStorage.getItem('user')
if (serializedUser){
	store.dispatch(setUser(JSON.parse(serializedUser)))
}

render(
    <Provider store={store}>
        <div style={{padding: 'lrem'}}>
            <Home />
        </div>
    </Provider>,
	document.getElementById('app')
)
