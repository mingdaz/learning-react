import React from 'react'
import NavLink from './NavLink'
import Logout from './session/Logout'

export default function Nav(){
	return (
		<div className="pure-menu pure-menu-horizontal">
			<ul className="pure-menu-list">
				<Logout />
				<NavLink to="/">Home</NavLink>
				<NavLink to="/customers">Customers</NavLink>
				<NavLink to="/invoices">Invoices</NavLink>
			</ul>
		</div>
	)
}