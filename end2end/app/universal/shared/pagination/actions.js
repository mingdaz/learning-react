import actionType, * as actionTypes from './actionTypes'

export default function actions(listId) {
	const t = actionType(listId)

	return {
		resultsUpdated: ({ results, totalCount }) => ({
			type: t(actionTypes.RESULTS_UPDATED),
			results,
			totalCount	
		}),

		previous: () => ({
			type: t(actionTypes.PREV)
		}),

		next: () => ({
			type: t(actionTypes.NEXT)
		}),

		setPage: (page, pageSize = undefined) => ({
			type: t(actionTypes.SET_PAGE),
			page,
			pageSize
		})
	}
}