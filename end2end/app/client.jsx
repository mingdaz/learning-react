import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './universal/reducer' 
import RGB from './universal/RGB'
import './app.scss'

const store = createStore(reducer, window.__PRELOADED_STATE__)

render(
    <Provider store={store}>
	    <RGB />
    </Provider>,
	document.getElementById('app')
)
