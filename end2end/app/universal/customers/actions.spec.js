import expect from 'expect'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'

import { SubmissionError } from 'redux-form'
import MockAdapter from 'axios-mock-adapter'
import { adapter } from '../api'
import * as actions from './actions'

const mockStore = configureStore([thunk])
const mockAdapter = new MockAdapter(adapter)

describe('customer actions', () => {
	afterEach(() => {
		mockAdapter.reset()
	})

	describe('list()', () => {
		const data = { totalCount: 0, results: []} 

		beforeEach(() => {
			mockAdapter.onGet('/customers').reply(200,data)
		}) 

		it('dispatches resultsUpdated', () => {
			const store = mockStore()

			return store.dispatch(actions.list()).then(() => {
				expect(store.getActions()).toInclude(actions.resultsUpdated(data))
			})
		})
	})

	describe('create()', () => {
		context('on validation failure', () => {
			beforeEach(() => {
				mockAdapter.onPost('/customers').reply(422,{errors: {}})				
			})

			it('throws a SubmissionError', () => {
				const store = mockStore()

				return store.dispatch(actions.create({})).catch((err) => {
					expect(err).toBeA(SubmissionError)
				})
			})
		})
	})
})