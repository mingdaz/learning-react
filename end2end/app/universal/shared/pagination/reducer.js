import reduce from '../../reduce'
import actionType, * as actionTypes from './actionTypes'

export const initialState = {
	results: [],
	totalCount: 0,
	page: 1,
	pageSize: 2,
	stale: true
} 

function setPage(state, action) {
	const { page, pageSize = state.pageSize } = action

	return {
		...state,
		page,
		pageSize,
		stale: true
	}
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

export default function paginatie(listId) {
	const t = actionType(listId)
	
	return reduce(initialState, {
		[t(actionTypes.RESULTS_UPDATED)]: updateResults,
		[t(actionTypes.NEXT)]: nextPage,
		[t(actionTypes.PREV)]: previousPage,
		[t(actionTypes.SET_PAGE)]: setPage
	})
}