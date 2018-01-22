import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Redirect } from 'react-router-dom'
import email from 'email-validator'
import FormField from '../shared/FormField'
import * as actions from './actions'

export class Create extends Component {
	state = {
		success: false
	}

	render() {
		const { pristine, invalid, handleSubmit } = this.props
		
		const submit = e => handleSubmit(e).then((resp) => {
			if (resp === 'SUCCESS') {
				this.setState({ success: true })
			}
		})
		
		if ( this.state.success) {
			return <Redirect to="/customers" />
		}
		return (
			<form className="pure-form pure-form-stacked" onSubmit={submit}>
	 			<fieldset>
					<legend>Create Customer</legend>
					<Field name="email" component={FormField} label="Email"/>
					
					<button type="submit" disabled={pristine || invalid} className="pure-button pure-button-primary">
						Submit
					</button>
				</fieldset>
			</form>
		)
	}
}

export default connect(
	undefined,
	{ onSubmit:actions.create }
)(reduxForm({
	form: 'createCustomer',
    validate: values => {
    	const errors = {}

    	if(!email.validate(values.email)) {
    		errors.email = 'Not valid'
    	}

    	return errors
    }
})(Create))