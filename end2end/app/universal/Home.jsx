import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import CustomerList from './customers/List'
import InvoiceList from './invoices/List'
import RGB from './RGB'

export function Home({ authenticated }) {
    if( !authenticated){
        return <Redirect to={{ pathname: '/login' }} />
    }
    return (
    	<div>
    		<Nav />

    		<Route exact path="/" component={RGB} />
    		<Route path="/customers" component={CustomerList} />
    		<Route path="/invoices" component={InvoiceList} />
    	</div>
    )

}

export default connect(
    state => ({
        authenticated: !!state.session.user
    })
)(Home)
