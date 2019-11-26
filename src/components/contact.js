import React, { Component } from 'react';
import $ from "jquery";
import emailjs from 'emailjs-com';
console.log(emailjs);

/** ContactForm Component */

// validate empty name input and message input
function validateNameMessage(res) {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];

    if (res.value.length === 0) {
        errors.push(res.name + " can't be empty");
    }

    if (res.value.length < 3) {
        if (res.name === "message") {
            errors.push("Please enter a valid " + res.name + " at lease 20 characters");
        }

        if (res.name === "name") {
            errors.push("Please enter a valid " + res.name + " between 3 to 32 characters.");
        }
    }

    return errors;
}

// validate email
function validateEmail(res) {
    const email = res.value;
    const errors = [];

    if (email.length < 5 || email.split("").filter(x => x === "@").length !== 1 || email.indexOf(".") === -1) {
        errors.push("Please enter a valide email");
    }

    return errors;
}

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: {
                name: "name",
                label: "Name",
                value: "",
                focus: false,
                errorMessage: ""
            },
            email: {
                name: "email",
                label: "Email",
                value: "",
                focus: false,
                errorMessage: ""
            },
            message: {
                name: "message",
                label: "Message",
                value: "",
                focus: false,
                errorMessage: ""
            },
        };

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFocus(e) {
        const name = e.target.name;
        const state = Object.assign({}, this.state[name]);
        state.focus = true;
        this.setState({ [name]: state });
    }

    handleBlur(e) {
        const name = e.target.name;
        const state = Object.assign({}, this.state[name]);
        state.focus = false;
        this.setState({ [name]: state });
    }

    handleChange(e) {
        const name = e.target.name;
        const state = Object.assign({}, this.state[name]);
        let errorMessage = "";
        state.value = e.target.value;

        if(name === "email") {
            errorMessage = validateEmail(this.state[name]);
        } else {
            errorMessage = validateNameMessage(this.state[name]);
        }

        if(errorMessage) {
           state.errorMessage =  errorMessage[0];
        }

        this.setState({ [name]: state });
    }

    handleSubmit(e) {
        e.preventDefault();

        $(e.target).addClass('on-click', 250);

        setTimeout(()=>{
            $(e.target).removeClass( "onclic" );
            $(e.target).addClass( "validate", 450, setTimeout(()=>{
                $( "#button" ).removeClass( "validate" );}, 1250 )
            );
        }, 2250);

        let contactFromData= {
            service_id: 'llislanding',
            template_id: 'llis_landing',
            template_params: {
                name: this.state.name.value,
                email: this.state.email.value,
                message: this.state.message.value
            }
        };

        emailjs.send(contactFromData.service_id, contactFromData.template_id, contactFromData.template_params, 'user_F8QEhEnKQp2iFas9nJ735')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(err) {
                console.log('FAILED...', err);
            });
    }

    render() {
        const { name, email, message } = this.state;
        let validated = name.value && !name.errorMessage && email.value && !email.errorMessage && message.value && !message.errorMessage;

        return (
            <div className="contact content">
                <div className="container row no-padding">
                    <ContactInfo>
                        <h1> Conatact Info</h1>
                        <p>Get in touch with me at anytime if you have any question.</p>
                        <p>Ues the form to the righ or my details below and I'll get back to you ASAP.</p>
                        <a href="mailto:liangli.0311@gmail.com" subject="Ciao Liang">liangli.0311@gmail.com</a>
                    </ContactInfo>

                    <div className="col-sm-1"></div>

                    <Card>
                        <h1>Ge in touch</h1>
                        <Form onSubmit={this.handleSubmit}>
                            <TextInput
                                {...name}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                                onChange={this.handleChange}
                            />

                            <TextInput
                                {...email}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                                onChange={this.handleChange}
                            />

                            <TextArea
                                {...message}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                                onChange={this.handleChange}
                            />

                        {validated? <Submit>Submit</Submit>:""}
                        </Form>
                    </Card>
                </div>
            </div>
        );
    }
}

/** Components */
const Card = props => <div className="card col-sm-7">{props.children}</div>;

const Form = props => <form className="form" onSubmit={props.onSubmit}>{props.children}</form>;

const TextInput = props => (
    <div className={props.errorMessage? "text-input has-error" : "text-input"}>
        <label
            className={props.focus || props.value !== "" ? "label-focus" : ""}
            htmlFor={props.name}
        >
            {props.label}
        </label>
        <input
            className={props.focus || props.value !== "" ? "input-focus" : ""}
            type="text"
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onInput={props.onInput}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        />
        {props.errorMessage? <p>{props.errorMessage}</p>:""}
    </div>
);

const TextArea = props => (
    <div className={props.errorMessage? "text-area has-error" : "text-area"}>
        <label
            className={props.focus || props.value !== "" ? "label-focus" : ""}
            htmlFor={props.name}
        >
            {props.label}
        </label>
        <textarea
            className={props.focus || props.value !== "" ? "input-focus" : ""}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onInput={props.onInput}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        />
        {props.errorMessage? <p>{props.errorMessage}</p>:""}
    </div>
);

const Submit = props => <input className="submit-btn" type="submit" value="Submit" />;
const ContactInfo = props => <div className="contact-info col-sm-4">{props.children}</div>;

export default Contact;
