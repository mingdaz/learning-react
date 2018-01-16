import reduce from '../reduce'
import * as actionTypes from './actionTypes'

const initialState = {
	results: [],
	totalCount: 0,
	page: 1,
	pageSize: 2,
	stale: true
} 

function updateResults(state, action) {
	const { results, totalCount } = action

	return {
		...state,
		results,
		totalCount,
		stale: false
	}
}

function previousPage(state) {
	return {
		...state,
		page: Math.max(state.page -1, 1),
		stale: true
	}
}

function nextPage(state) {
	const totalPages = Math.ceil(state.totalCount / state.pageSize)

	return {
		...state,
		page: Math.min(state.page + 1, totalPages),
		stale: true
	}
}

export default reduce(initialState, {
	[actionTypes.RESULTS_UPDATED]: updateResults,
	[actionTypes.NEXT]: nextPage,
	[actionTypes.PREV]: previousPage
})