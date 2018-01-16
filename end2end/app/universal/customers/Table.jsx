import React , { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

export class Table extends Component {
	componentDidMount(){
		this.props.fetch()
	}

	render() {
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
					{this.props.results.map(r => (
						<tr key={r.id}>
							<td>{r.email}</td>
						</tr>		
					))}
				</tbody>
			</table>
		)
	}
}

export default connect(
	state => state.customers,
	{ fetch: actions.list }
)(Table)