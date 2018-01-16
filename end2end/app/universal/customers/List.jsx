import React from 'react'
import { Link } from 'react-router-dom'
import Table from './Table'
import { Flipper } from '../shared/pagination'

export default function List() {
	return (
		<div className="pure-g">
			<div className="pure-u-1">
			<h1>Manage Customers</h1>
			<Link className="pure-button" to="/customers/new">+ Add Customer</Link>
			</div>

			<div className="pure-u-1">
				<Flipper listId="customers"/>
			</div>
			<div className="pure-u-1">
				<Table />
			</div>
		</div>
	)
}