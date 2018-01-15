import Customer from '../models/Customer'

export default function customersController(api){
	api.post('/customers',(req, res, next) => {
		const customer = {
			...req.body.customer,
			user_id: req.currentUser.id
		}
		return Customer.forge(customer).save().then(
			customer => res.json({ customer })
		).catch(() => res.status(422).end())
	})
}