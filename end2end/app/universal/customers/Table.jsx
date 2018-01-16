import React from 'react'
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
				</tr>
			</thead>
			<tbody>
				{results.map(r => (
					<tr key={r.id}>
						<td>{r.email}</td>
					</tr>		
				))}
			</tbody>
		</table>
	)
}

export default tabulate('customers', actions.list)(Table)