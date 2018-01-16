import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import rgb from './rgbReducer'
import session from './session/reducer'
import customers from './customers/reducer'

export default combineReducers({ rgb, session, form, customers })