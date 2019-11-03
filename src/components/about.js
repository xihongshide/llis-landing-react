import React, { Component } from 'react';
import Velocity from 'velocity-animate';
import {capitalize} from '../utility.js';
import $ from "jquery";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpend: false,
        };
        this.animatePanel = this.animatePanel.bind(this);
    }

    componentDidMount(){
        Velocity(this.refs.ani1, "transition.shrinkIn", { display: "inline-block", duration: 800, delay: 800});
        Velocity(this.refs.ani2, "transition.shrinkIn", { display: "inline-block", duration: 800, delay: 1100});
        Velocity(this.refs.ani3, "transition.shrinkIn", { display: "inline-block", duration: 800, delay: 1400});
    }

    animatePanel(e) {
        setTimeout(() => {
            this.setState({isExpend: true});
        }, 1000);
    }

    render() {
        let isPanelExpend = this.state.isExpend;

        return (
            <div className="about content">
                <div className="container">
                     <div className="col-container">
                         <div className={`about-hobby about-cols`} ref="ani1">
                             { !isPanelExpend ? <AboutHobby name="hobby" isExpend={isPanelExpend} expendHandler={this.animatePanel} /> : <AboutHobbyExpend /> }
                         </div>
                         <div className={`about-work about-cols`} ref="ani2">
                             { !isPanelExpend ? <AboutWork name="work" isExpend={isPanelExpend} expendHandler={this.animatePanel} /> : <AboutHobbyExpend /> }
                         </div>
                         <div className={`about-journey about-cols`} ref="ani3">
                             { !isPanelExpend ? <AboutJourney name="journey" isExpend={isPanelExpend} expendHandler={this.animatePanel} /> : <AboutHobbyExpend /> }
                         </div>
                    </div>
                </div>
            </div>
        );
    }
}

//Hobby Component
class AboutHobby extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
         Velocity(this.refs.ani1,{opacity:1},{ duration: 500, delay: 300});
    }

    render() {
        const heartElements = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

        return (
            <div onClick={this.props.expendHandler}>
                <div className="hobby-col about-col">
                    <div className="hobby-heart">
                        <button>Love</button>
                        <div className="hobby-heart-container">
                            {heartElements.map((value, index) => {
                                return <div key={`heart_piece_${index}`} className={`heart-piece-${index}`}></div>;
                            })}
                        </div>
                    </div>
                </div>
                <div className="hobby-panel"></div>
            </div>
        );
    }
}

class AboutHobbyExpend extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about-expended">
                <p>expended</p>
                <button className="about-btn">Back</button>
            </div>
        );
    }
}

//Work Component
class AboutWork extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const workAniElements = ['1', '2', '3', '4', '5', '6', '7'];

        return (
            <div onClick={this.props.expendHandler}>
                <div className="work-col about-col">
                    <div className="code-view-container">
                        <div className="code-view">
                            {workAniElements.map((value, index) => {
                                return <span key={`line_${index+1}`} className={`line-${index+1}`}></span>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//Journey Component
class AboutJourney extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div onClick={this.props.expendHandler}>
                <div className="journey-col about-col">
                    <h1>Journey</h1>
                </div>
            </div>
        );
    }
}

export default About;
