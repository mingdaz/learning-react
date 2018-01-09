import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

export class Login extends Component {
    state = {
        username: '',
        password: '',
        invalid: false
    }
    
    update = field => e => this.setState({[field]: e.target.value})

    onSubmit = (e) => {
        e.preventDefault()
        const {username, password} = this.state
        this.props.login(username,password).catch(err=> {
            if (err.response.status === 422){
                this.setState({ invalid: true})
            } else {
                throw err
            }                
                                                 
                                                 
        })
    }

    render() {
        return (
            <form className="pure-form pure-form-stacked" onSubmit={this.onSubmit}>
                <fieldset>
                    <legend>Sign in</legend>
                    {this.state.invalid && (
                        <div style={{ height: '2rem', color: 'red'}}>
                            Invalid Credentials
                        </div>
                    )}
                    <input type="text" placeholder="Username" onChange={this.update('username')} />
                    <input type="password" placeholder="Password" onChange={this.update('password')}/>

                    <button type="submit" className="pure-button pure-button-primary">Sign in</button>
                </fieldset>
            </form>
        
        
        
        )

    }

}

export default connect(undefined, {login: actions.login})(Login)
