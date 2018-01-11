import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

export function Logout({logout}){
	return (
		<a
			role="button"
			className="pure-menu-heading pure-menu-link"
			onClick={logout}
		>
			Logout
		</a>
	)
}

export default connect(undefined, {logout: actions.logout})(Logout)