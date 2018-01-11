import React from 'react'
import NavLink from './NavLink'

export default function Nav(){
	return (
		<div className="pure-menu pure-menu-horizontal">
			<ul className="pure-menu-list">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/customers">Customers</NavLink>
				<NavLink to="/invoices">Invoices</NavLink>
			</ul>
		</div>
	)
}