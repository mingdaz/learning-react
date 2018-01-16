export const RESULTS_UPDATED = 'pagination/RESULTS_UPDATED'
export const NEXT = 'pagination/NEXT'
export const PREV = 'pagination/PREV'

export default function actionType(listId) {
	return t => `${t}_${listId}`
}