import React, { Component } from 'react';
import $ from "jquery";
import emailjs from 'emailjs-com';
import Recaptcha from 'react-recaptcha';
import Velocity from "velocity-animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faHandPointUp, faHandPointLeft, faHandPointDown } from "@fortawesome/free-regular-svg-icons";

//Partial Components
import SocialNetworkList from './partialComponents/socialNetworkList.js';

const defaultState ={
    name: {
        name: "name",
        label: "Name",
        value: "",
        focus: false,
        errorMessage: "",
        max: 32,
        min: 3,
    },
    email: {
        name: "email",
        label: "Email",
        value: "",
        focus: false,
        errorMessage: "",
        max: 32,
        min: 0
    },
    message: {
        name: "message",
        label: "Message",
        value: "",
        focus: false,
        errorMessage: "",
        max: 10000,
        min: 10,
    },

    recaptcha: false
};
/** ContactForm Component */

// validate empty name input and message input
function validateNameMessage(res) {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];

    if (res.value.length === 0) {
        errors.push(res.name + " can't be empty");
    }

    if (res.value.length < res.min || res.value.length > res.max) {
        errors.push("Please enter a valid " + res.name + " between " + res.min  + " and " + res.max + " characters");
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

/** Components */
const Card = props => <div className="card col-xs-12 col-md-7 col-md-pull-5 velocity-animate" id="contact_card_js">{props.children}</div>;

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
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        />
        {props.errorMessage? <p>{props.errorMessage}</p>:""}
    </div>
);

const Submit = props => <input className={`submit-btn ${props.disabled ? "disabled": ""}`} type="submit" value="Send" />;
const ContactInfo = props => <div className="contact-info col-md-4 col-xs-12 col-md-push-8 velocity-animate" id="contact_info_js">{props.children}</div>;

class Contact extends Component {
    constructor() {
        super();
        this.state = defaultState;

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.recaptchaVerifyCallback = this.recaptchaVerifyCallback.bind(this);
    }

    componentDidMount() {
        Velocity($("#contact_info_js"), 'transition.slideLeftBigIn', {duration: 1200, delay: 800} );
        Velocity($("#contact_card_js"), 'transition.slideRightBigIn', {duration: 1200, delay: 800} );
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
        state.value = $(e.target).val();

        if(name === "email") {
            errorMessage = validateEmail(state);
        } else {
            errorMessage = validateNameMessage(state);
        }

        if(errorMessage) {
           state.errorMessage =  errorMessage[0];
        }

        this.setState({ [name]: state });
    }

    handleSubmit(e) {
        e.preventDefault();
        const self = this;
        let button = $(e.target).find(".submit-btn");
        setTimeout(()=>{$(button).addClass('on-click');}, 450);

        let contactFromData= {
            service_id: 'llislanding',
            template_id: 'llis_landing',
            template_params: {
                name: this.state.name.value,
                email: this.state.email.value,
                message: this.state.message.value,
            }
        };

        emailjs.send(contactFromData.service_id, contactFromData.template_id, contactFromData.template_params, 'user_F8QEhEnKQp2iFas9nJ735')
            .then(function(response) {
                setTimeout(()=>{
                    $(button).removeClass("on-click");
                    $(button).val("Sent!").addClass( "validate", 1550, setTimeout(()=>{
                        $(button).removeClass("validate").val("Send");
                        self.setState(defaultState);
                        window.grecaptcha.reset();
                    }, 1550 ));
                }, 1550);
            }, function(err) {
                setTimeout(()=>{
                    $("#error_message_js").text(err.text + ".", ()=>{
                        Velocity($(this), 'transition.expendIn', {duration: 850, delay: 300, display: 'block', opacity: 1});
                    });
                    $(button).removeClass("on-click");
                    setTimeout(()=>{
                        Velocity($('#error_message_js'), 'transition.shrinkOut', {duration: 850, delay: 300, display: 'block', opacity: '0'} );
                        $('#error_message_js').text("");
                        self.setState(defaultState);
                        window.grecaptcha.reset();
                    }, 3550 );
                }, 2550);
            });
    }

    // specifying verify callback function
    recaptchaVerifyCallback(response) {
        this.setState({recaptcha: true});
    }

    render() {
        const { name, email, message, recaptcha} = this.state;
        let validated = name.value && !name.errorMessage && email.value && !email.errorMessage && message.value && !message.errorMessage && recaptcha;

        return (
            <div className="contact content">
                <div className="container contact-container">
                    <div className="inner-container row no-padding">
                        <Card>
                            <h1>Ge in touch</h1>
                            <p><FontAwesomeIcon icon={faQuoteLeft} />It's very, very dangerous to lose contact with living nature. <span>― Albrt Hofmann</span></p>

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

                                <Recaptcha
                                    sitekey="6Leaz8QUAAAAADTXF0k9MxdYIBEZsrAMwq1aJDHG"
                                    render="explicit"
                                    verifyCallback={this.recaptchaVerifyCallback}
                                    onloadCallback={this.recaptchaCallback}
                                    theme="Dark"
                                    dataExpiredCallback={()=>this.setState({recaptcha: false,})}
                                    hl="en"
                                />

                                <p id="error_message_js" className="error-message"> </p>

                                <Submit disabled={validated ? "": "disabled"}>Submit</Submit>
                            </Form>
                        </Card>

                        <div className="col-md-1 hidden-sm hidden-xs"> </div>

                        <ContactInfo>
                            <h1> Conatact Info</h1>
                            <p>Get in touch with me at anytime if you have any questions.</p>
                            <p>Ues the form to the <b>left<FontAwesomeIcon icon={faHandPointLeft} /></b> or my details <b>below<FontAwesomeIcon icon={faHandPointDown} /></b> and I'll get back to you ASAP.</p>
                            <p>Ues the contact form <b>above<FontAwesomeIcon icon={faHandPointUp} /></b> or my details <b>below<FontAwesomeIcon icon={faHandPointDown} /></b> and I'll get back to you ASAP.</p>
                            <SocialNetworkList />
                            <p><FontAwesomeIcon icon={ faMapMarker } /> Ottawa | ON.</p>
                        </ContactInfo>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;
