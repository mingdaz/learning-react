import React from 'react'
import {render} from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './universal/reducer' 
import Home from './universal/Home'
import './app.scss'

const store = createStore(reducer, window.__PRELOADED_STATE__, applyMiddleware(thunk))


render(
    <Provider store={store}>
        <div style={{padding: 'lrem'}}>
            <Home />
        </div>
    </Provider>,
	document.getElementById('app')
)
