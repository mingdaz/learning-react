import bookshelf from '../connection'
import Customer from './Customer'

export default bookshelf.Model.extend({
    tableName: 'invoices',

    customer: function() {
    	return this.belongsTo(Customer)
    }
})


