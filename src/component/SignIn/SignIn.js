import React, { Component } from 'react'
import NavBar from '../NavBar'
import '../SignUp/SignUp.css'

const emailRegex = RegExp(/\S+@\S+\.\S+/);
const passwordRegex = RegExp(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/)

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    })
    Object.values(rest).forEach(val => {
        val === "" && (valid = false)
    })
    return valid
}
export default class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            formErrors: {
                email: "",
                password: ""
            }
        };

    }
    onChange = e => {
        e.preventDefault();

        const { name, value } = e.target;
        const { formErrors } = this.state;

        switch (name) {
            case 'email':
                formErrors.email = emailRegex.test(value) ? '' : "Please enter a valid email address";
                break;
            case 'password':
                formErrors.password = passwordRegex.test(value) ? "" : "contains uppercase, lowercase, alphanumeric, number and 8 characters";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value })

    }

    onSubmit = e => {
        e.preventDefault();
        if (formValid(this.state) && this.canSubmit()) {
            alert(`Welcome back ${this.state.email}. Kindly take your time to read up on what you have missed.`)
            this.props.history.push('/feed')
        } else {
            return
        }
    }

    canSubmit = () => {
        const { email, password } = this.state;
        return emailRegex.test(email) && passwordRegex.test(password)
    }
    render() {
        const { email, password, formErrors } = this.state;
        const isEnabled = this.canSubmit();

        return (
            <React.Fragment>
                <NavBar />
                <section className="sign-in">
                    <form onSubmit={this.onSubmit} className="shadow-5 align" noValidate action="sign-in_submit" method="post" acceptCharset="utf-8">
                        <h1>{'Welcome Back'}</h1>
                        <div>
                            <div className="tl">
                                <label htmlFor="email-address">Email</label>
                                <input className={formErrors.email.length > 0 ? "error" : null} type="email"
                                    name="email" id="email" placeholder="Email" value={email} noValidate onChange={this.onChange} />{formErrors.email.length > 0 && (<small className="error-message">{formErrors.email}</small>)}
                            </div>
                            <div className="tl">
                                <label htmlFor="password">Password</label>
                                <input className={formErrors.password.length > 0 ? "error" : null} type="text"
                                    name="password" id="password" placeholder="Password" value={password} noValidate onChange={this.onChange} />
                                {formErrors.password.length > 0 && (<small className="error-message">{formErrors.password}</small>)}
                            </div>
                            <small className="db tl">Don't have an account. <a className="link" href="/signup">Sign Up</a></small><small className="db tl"><a className="link" href='/password'>Forgot Password</a></small>
                            <button className="btn" disabled={!isEnabled} type="submit">Sign In</button>
                        </div>
                    </form>
                </section>
            </React.Fragment>
        )
    }
}
