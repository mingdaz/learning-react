import email from 'email-validator'
import bookshelf from '../connection'
import ValidationException from './ValidationException'

export default bookshelf.Model.extend({
	tableName: 'customers',

	initialize: function () {
		this.on('saving', (model) => {
			const errors = {}
			const values = model.toJSON()

			const unique = model.where({
				email: values.email,
				user_id: values.user_id
			}).fetch().then((customer) => {
				if (customer && customer.id !== values.id){
					errors.email = "Must be unique"
				}
			})
			const format = new Promise((resolve) => {
				if (!email.validate(values.email)) {
					errors.email = 'Not valid'
				}

				resolve()
			})
			
			return Promise.all([format, unique]).then(() => {
				if (Object.keys(errors).length ){
					throw new ValidationException(errors)
				}
			})
		})
	}
})