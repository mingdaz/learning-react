import reduce from '../reduce'
import * as actionTypes from './actionTypes'

const initialState = {
	results: [],
	totalCount: 0
} 

function updateResults(state, action) {
	const { results, totalCount } = action

	return {
		...state,
		results,
		totalCount
	}
}

export default reduce(initialState, {
	[actionTypes.RESULTS_UPDATED]: updateResults
})