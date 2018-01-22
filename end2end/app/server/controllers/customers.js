import Customer from '../models/Customer'

export default function customersController(api){
	api.get('/customers', (req, res, next) => {
		const { page = 1, pageSize = 15 } = req.query
		return Customer.where({ user_id: req.currentUser.id })
			.orderBy('email')
			.fetchPage({ page, pageSize }).then(resp => {
				res.json({
					totalCount: resp.pagination.rowCount,
					results: resp.toJSON()
				})
			})
	})

	api.post('/customers',(req, res, next) => {
		const customer = {
			...req.body.customer,
			user_id: req.currentUser.id
		}
		return Customer.forge(customer).save().then(
			customer => res.json({ customer })
		).catch(next)
	})
}