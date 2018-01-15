import api from '../api'

export function create(data) {
	return () => api.customers.create(data)
}