import React, { Component } from 'react'
import UserBio from './UserBio';
import UserDetails from './UserDetails';
import JobDetails from './JobDetails';
import './SignUp.css'

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
    return valid;
}
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            address: "",
            gender: "",
            jobRole: "",
            department: "",
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                address: "",
                gender: "",
                jobRole: "",
                department: ""
            }
        }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 })
    }
    onChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        const { formErrors } = this.state;
        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 3 ? "minimum 3 characters required" : "";
                break;
            case 'lastName':
                formErrors.lastName = value.length < 3 ? "minimum 3 characters required" : "";
                break;
            case 'email':
                formErrors.email = emailRegex.test(value) ? "" : "Invalid email address";
                break;
            case 'password':
                formErrors.password = passwordRegex.test(value) ? "" : "contains uppercase, lowercase, alphanumeric, number and 8 characters";
                break;
            case 'address':
                formErrors.address = value.length < 30 ? "minimum 30 characters required" : "";
                break;
            case 'jobRole':
                formErrors.jobRole = value.length < 8 ? "minimum 8 characters required" : "";
                break;
            case 'department':
                formErrors.department = value.length < 6 ? "minimum 6 characters required" : "";
                break;
            default:
                break;
        }


        this.setState({
            formErrors, [name]: value
        })
    }

    onSubmitForm = () => {

        if (formValid(this.state)) {
            alert(`Successfully Created account as ${this.state.firstName} ${this.state.lastName}. Kindly check your email for further instructions`)
            this.props.history.push('/feed')
        } else {
            alert(`Ooops!!! Account creation failed, fields cannot be empty`)
        }
    }

    render() {
        const { formErrors, step } = this.state
        const { firstName, lastName, email, password, gender, address, jobRole, department } = this.state;
        const values = { firstName, lastName, email, password, gender, address, jobRole, department, formErrors }
        switch (step) {
            case 1:
                return (
                    <UserBio
                        nextStep={this.nextStep}
                        onChange={this.onChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        onChange={this.onChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <JobDetails
                        prevStep={this.prevStep}
                        onClick={this.onSubmitForm}
                        onChange={this.onChange}
                        values={values}
                    />
                )

            default:
                break;
        }


    }
}

export default SignUp;