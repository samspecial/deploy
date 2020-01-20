import React, { Component } from 'react';
import { Section, Form, Button } from './styles';

const emailRegex = RegExp(/\S+@\S+\.\S+/);
export default class ContactForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }
    formChange = (e) => {
        e.preventDefault()

        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    canSubmit = () => {
        const { email, firstName, lastName, message } = this.state;
        return emailRegex.test(email) && firstName.length > 0 && lastName.length > 0 && message.length > 0;
    }

    onSubmit = e => {
        e.preventDefault();
        const { firstName } = this.state;
        alert(`${firstName}, Message sent successful. We will get back shortly.`);
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        })
    }
    render() {
        const { firstName, lastName, email, message } = this.state;
        const isEnabled = this.canSubmit();
        return (
            <div>
                <Section>
                    <Form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input className="input" required
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={this.formChange} />
                            <label className="content" htmlFor="firstName">
                                <span className="content-name">First Name</span>
                            </label>
                        </div>
                        <div className="form-group">
                            <input className="input" required
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={this.formChange} />
                            <label className="content" htmlFor="lastName">
                                <span className="content-name">Last Name</span>
                            </label>
                        </div>
                        <div className="form-group">
                            <input className="input" required
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.formChange} />
                            <label className="content" htmlFor="email">
                                <span className="content-name">Email</span>
                            </label>

                        </div>
                        <textarea
                            placeholder="Message"
                            name="message"
                            rows="4"
                            value={message}
                            onChange={this.formChange}>
                        </textarea>

                        <Button disabled={!isEnabled} type="submit">Send Message</Button>
                    </Form>

                </Section>
            </div>
        )
    }
}
