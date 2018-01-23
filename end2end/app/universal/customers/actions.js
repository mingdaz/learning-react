import { SubmissionError } from 'redux-form'
import api from '../api'
import actions from '../shared/pagination/actions'

export const { resultsUpdated, setPage } = actions('customers')

export function create(data) {
	return () => api.customers.create(data).then(() => 'SUCCESS').catch((err) => {
		if (err.response.status === 422) {
			throw new SubmissionError(err.response.data.errors)
		}

		throw err
	})
}

export function list(page = 1, pageSize = 15) {
	return dispatch => api.customers.list(page, pageSize).then(resp =>
		dispatch(resultsUpdated(resp.data))
	)
}
