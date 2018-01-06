import React from 'react'
import axios from 'axios'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './universal/reducer' 
import RGB from './universal/RGB'
import './app.scss'

const store = createStore(reducer, window.__PRELOADED_STATE__)

const adapter = axios.create({
    baseURL: 'http://localhost:9999/api',
    withCredentials: true,
    headers: {
        Accept: 'application/json'
    }
})

adapter.post('/session',{username: 'admin', password: 'notmypassword'}).then(()=>adapter.get('/session'))

render(
    <Provider store={store}>
	    <RGB />
    </Provider>,
	document.getElementById('app')
)
