import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './session/Login'

export default function App() {
	return (
		<div style={{ padding: '1rem' }}>
			<Switch>
				<Route path="/login" component={Login} />
				<Route component={Home} />
			</Switch>
		</div>
	)
}