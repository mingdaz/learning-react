import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import CustomerList from './customers/List'
import InvoiceList from './invoices/List'
import RGB from './RGB'
import CreateCustomer from './customers/Create'

export function Home({ authenticated }) {
    if( !authenticated){
        return <Redirect to={{ pathname: '/login' }} />
    }
    return (
    	<div>
    		<Nav />
    		<Switch>
    			<Route exact path="/" component={RGB} />
    			<Route path="/customers/new" component={CreateCustomer} />
                <Route path="/customers" component={CustomerList} />
    			<Route path="/invoices" component={InvoiceList} />
    			<Route children={({ staticContext }) => {
    				if (staticContext) {
    					staticContext.status = 404
    				}

    				return <h1>Sorry, can't find that</h1>
    			}}/>
    		</Switch>
    	</div>
    )

}

export default connect(
    state => ({
        authenticated: !!state.session.user
    })
)(Home)
