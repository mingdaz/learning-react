import React from 'react'
import moment from 'moment'
import * as actions from './actions'
import { tabulate } from '../shared/pagination'

export function Table({ results }) {
	return (
		<table className="pure-table">
			<thead>
				<tr>
					<th>
					Email Address
					</th>
					<th>
					Total
					</th>
					<th>
					Bill Date
					</th>
				</tr>
			</thead>
			<tbody>
				{results.map(r=>(
					<tr key={r.id}>
						<td>{r.customer.email}</td>
						<td>{r.total}</td>
						<td>{moment(r.created_at).format('dddd, MMMM Do YYYY')}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default tabulate('invoices', actions.list)(Table)