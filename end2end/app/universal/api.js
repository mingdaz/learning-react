import axios from 'axios'
import createStore from './createStore'
import { clearUser } from './session/actions'

const adapter = axios.create({
    baseURL: 'http://localhost:9999/api',
    withCredentials: true,
    headers:{
        Accept: 'application/json'
    }
})

adapter.interceptors.response.use(undefined, error => {
	if (error.response.status === 403) {
		const store = createStore()
		store.dispatch(clearUser())
		window.localStorage.removeItem('user')
	}

	return Promise.reject(error)
})

export default {
    session: {
        login:(username,password) => adapter.post('/session',{username,password}).then((resp) => {
        	window.localStorage.setItem('user', JSON.stringify(resp.data.user))	
        	return resp
       	}),
       	info: () => adapter.get('/session')
    }
}

