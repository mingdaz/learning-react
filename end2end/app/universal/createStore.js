import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

let store = null

export default function create(server = false) {
	if (!store) {
		store = createStore(
			reducer,
			server ? undefined : window.__PRELOADED_STATE__,
			applyMiddleware(thunk)
		)
	}

	return store
}