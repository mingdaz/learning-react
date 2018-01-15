import { SubmissionError } from 'redux-form'
import api from '../api'

export function create(data) {
	return () => api.customers.create(data).then(() => 'SUCCESS').catch((err) => {
		if (err.response.status === 422) {
			throw new SubmissionError(err.response.data.errors)
		}

		throw err
	})
}