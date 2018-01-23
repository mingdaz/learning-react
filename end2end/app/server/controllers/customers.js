import Customer from '../models/Customer'
import * as service from '../services/customers'

export default function customersController(api){
	api.get('/customers', (req, res, next) => {
		return service.list(req.query, req.currentUser).then(page => res.json(page))
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