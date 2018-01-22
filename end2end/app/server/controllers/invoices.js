import Invoice from '../models/Invoice'

export default function invoicesController(api){
	api.get('/invoices', (req, res, next) => {
		const { page = 1, pageSize = 15 } = req.query

		return Invoice.query(qb => {
			qb.innerJoin('customers', 'customers.id', 'invoices.customer_id')
			qb.innerJoin('users', 'users.id', 'customers.user_id')
			qb.where('users.id', '=', req.currentUser.id)
		}).orderBy('-created_at').fetchPage({
			page,
			pageSize,
			withRelated: ['customer']
		}).then(resp => {
			res.json({
				totalCount: resp.pagination.rowCount,
				results: resp.toJSON()
			})
		})
	})
}