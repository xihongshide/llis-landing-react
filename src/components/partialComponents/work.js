import React, { Component } from 'react';
import Velocity from 'velocity-animate';
import $ from "jquery";
import Brain from './brain.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faCode } from '@fortawesome/free-solid-svg-icons';

const WorkContent = [
    {
        name: 'programmer',
        title: 'Mad Programmer',
        description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
        icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
	    color: '#fff',
    },

    {
        name: 'teacher',
        title: 'IELTS Teacher',
        description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
        icon: <FontAwesomeIcon icon={faCode} />,
        color: '#fff',
}
];

class Content extends Component {
    componentDidMount(){
        Velocity($('.about-work-content h1'), "transition.shrinkIn", { display: "block", duration: 500, delay: 50});
        Velocity($('.about-work-content p'), "transition.shrinkIn", { display: "block", duration: 500, delay: 150});
    }

    render() {
        let workContent = WorkContent[this.props.contentIndex];
        console.log(this.props.contentIndex);
        return (
            <div className={`${workContent.name} about-work-content`}>
                {workContent.icon}
                <h1 className="velocity-animate">{workContent.title}</h1>
                <p className="velocity-animate">{workContent.description}</p>
            </div>
        );
    }
}

class Work extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            contentIndex: null,
        };

        this.openBrain = this.openBrain.bind(this);
        this.closeBrain = this.closeBrain.bind(this);
    }

    openBrain(e) {
        console.log(e.target);
        this.setState({
            contentIndex: e.target.getAttribute('value'),
            isOpen: true,
        });
    }

    closeBrain(e) {
        this.setState({
            contentIndex: null,
            isOpen: false,
        });
    }

    render() {
        return (
            <div className="about-work-container">
                <div className="work-barin">
                    {this.state.isOpen? <Content contentIndex={this.state.contentIndex} />:""}
                    <div className="brain">
                        <Brain />
                        <button id="barin-left-btn" className="col-xs-6 brain-left" value="0" onClick={this.openBrain}>
                        </button>
                        <button id="barin-right-btn" className="col-xs-6 brain-right" value="1" onClick={this.openBrain}>
                        </button>
                    </div>
                    <button id="barin-close" onClick={this.closeBrain}>close</button>
                </div>
            </div>
        );
    }
}

export default Work;
