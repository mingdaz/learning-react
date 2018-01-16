import React, {Component} from 'react'
import Table from './Table'
import { Flipper } from '../shared/pagination'

export default function List() {
	return (
		<div className="pure-g">
			<div className="pure-u-1">
				<h1>Manage Invoices</h1>
			</div>

			<div className="pure-u-1">
				<Flipper listId="invoices" />
			</div>
			<div className="pure-u-1">
				<Table />
			</div>
		</div>
	) 
}