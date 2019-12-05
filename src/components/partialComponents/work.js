import React, { Component } from 'react';
import Velocity from 'velocity-animate';
import $ from "jquery";
import Brain from './brain.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faCode } from '@fortawesome/free-solid-svg-icons';
import { VelocityTransitionGroup, VelocityComponent } from 'velocity-react';

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
        Velocity($('#about_work_content > *'), "transition.expandIn", {stagger: 300, delay: 1200, duration: 800});
    }

    render () {
        let workContent = WorkContent[this.props.content.contentIndex];
        let isOpen = this.props.content.isOpen;

        return (
            <div id="about_work_content" className={`${workContent.name} about-work-content`}>
                <div className="velocity-animate">{workContent.icon}</div>
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
        $('#barin_left_btn, #barin_right_btn').attr("disabled", "disabled");
        Velocity($('#left_brain_svg'), {translateX: -500, delay: 1000, duration: 1500});
        Velocity($('#right_brain_svg'), {translateX: 500, delay: 1000, duration: 1500});
        $($('.bot_brain_svg').get().reverse()).each((value, index) => {
            Velocity($(index), "transition.slideDownBigOut", {delay: 300 + value*300, duration: 500});
        });

        this.setState({contentIndex: e.target.getAttribute('value'), isOpen: true});
    }

    closeBrain(e) {
        $('#barin_left_btn, #barin_right_btn').removeAttr("disabled", "disabled");
        Velocity($('#about_work_content > *'), "transition.expandOut", {stagger: 300, delay: 500, duration: 500, complete: ()=> {
            Velocity($('#left_brain_svg'), {translateX: 0, delay: 1000, duration: 1500});
            Velocity($('#right_brain_svg'), {translateX: 0, delay: 1000, duration: 1500});
            Velocity($('.bot_brain_svg'), "transition.slideUpBigIn", {stagger: 300, delay: 1000, duration: 500});
            this.setState({ontentIndex: null, isOpen: false,});
        }});
    }

    render() {
        let isOpen = this.state.isOpen;

        return (
            <div className="about-work-container">
                <div className="work-barin">
                    {isOpen ? <Content content={this.state}/> : undefined}

                    <div className="brain">
                        <Brain onClick={this.openBrain}/>

                    </div>

                    <VelocityComponent animation={ isOpen ? 'transition.bounceDownIn' : 'transition.bounceUpOut'} delay={1500}>
                        <div className="brain-close-container">
                            <button id="barin-close" onClick={this.closeBrain}>close</button>
                        </div>
                    </VelocityComponent>
                </div>
            </div>
        );
    }
}

export default Work;
