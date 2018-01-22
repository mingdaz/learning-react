import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import rgb from './rgbReducer'
import session from './session/reducer'
import paginate from './shared/pagination/reducer'


export default combineReducers({ 
	rgb, 
	session, 
	form,
	customers: paginate('customers'),
	invoices: paginate('invoices')
})