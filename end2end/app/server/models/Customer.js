import bookshelf from '../connection'

export default bookshelf.Model.extend({
	tableName: 'customers'
})