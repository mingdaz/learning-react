import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './universal/reducer'
import template from './template'
import RGB from './universal/RGB'
import { updateColor } from './universal/actions'
export default function render(req, res) {
    const store = createStore(reducer)
    store.dispatch(updateColor('r',200))
    const html = renderToString(
        <Provider store={store}>
            <RGB />
        </Provider>
    )
    res.send(template(html,store.getState()))
}
