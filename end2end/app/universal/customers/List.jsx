import React from 'react'
import { Link } from 'react-router-dom'

export default function List() {
	return (
		<div>
			<h1>Manage Customers</h1>
			<Link className="pure-button" to="/customers/new">+ Add Customer</Link>
		</div>
	)
}