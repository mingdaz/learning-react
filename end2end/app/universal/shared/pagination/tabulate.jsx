import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function tabulate(name, fetch) {
	return Table => {
		class Tabulated extends Component {
			componentDidMount(){
				const { stale, fetch } = this.props
				
				if (stale) {
					fetch()
				}
			}

			componentWillReceiveProps(nextProps) {
				const { stale, fetch } = nextProps

				if (stale) {
					fetch()
				}
			}

			render() {
				return <Table results={this.props.results}/>
			}
		}

		return connect(state => state[name])(connect(
         	undefined,
			(dispatch, ownProps) => ({
				fetch: () => dispatch(fetch(ownProps.page, ownProps.pageSize))
			})
		)(Tabulated))
	}
} 