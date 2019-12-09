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
        Velocity($('#about_work_content > *'), "transition.expandIn", {stagger: 300, delay: 1200, duration: 800});
    }

    render () {
        let workContent = WorkContent[this.props.content.contentIndex];

        return (
            <div id="about_work_content" className={`${workContent.name} about-work-content`}>
                <div className="velocity-animate">{workContent.icon}</div>
                <h1 className="velocity-animate">{workContent.title}</h1>
                <p className="velocity-animate">{workContent.description}</p>
                <div className="brain-close-container velocity-animate">
                    <button id="brain-close" onClick={this.props.closeBrain}>please close my brain after exploring</button>
                </div>
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
        this.handleBotOpen = this.handleBotOpen.bind(this);
    }

    openBrain(e) {
        $('#barin_left_btn, #barin_right_btn').attr("disabled", "disabled");
        Velocity($('#left_brain_svg'), {translateX: -500}, {easing: "ease-in-out", delay: 1000, duration: 500});
        Velocity($('#right_brain_svg'), {translateX: 500}, {easing: "ease-in-out", delay: 1000, duration: 500});
        $($('.bot_brain_svg').get().reverse()).each((value, index) => {
            Velocity($(index), "transition.slideDownBigOut", {delay: 300 + value*300, duration: 500});
        });

        $('.content').addClass("flash-bg");

        this.setState({contentIndex: e.target.getAttribute('value'), isOpen: true});
    }

    handleBotOpen(e) {
        const ele =  $(e.target);
        const siblings = $(ele).siblings(".bot_brain_svg");
        $(ele).toggleClass("active");

        if($(".bot_brain_svg").filter(".active").length === 3) {
            $('#barin_left_btn, #barin_right_btn').attr("disabled", "disabled");
            Velocity($('#left_brain_svg'), {translateX: -500}, {easing: "ease-in-out", delay: 1000, duration: 500});
            Velocity($('#right_brain_svg'), {translateX: 500}, {easing: "ease-in-out", delay: 1000, duration: 500});
            $($('.bot_brain_svg').get().reverse()).each((value, index) => {
                Velocity($(index), "transition.slideDownBigOut", {delay: 300 + value*300, duration: 500});
            });

            $('.content').addClass("flash-bg");

            this.setState({contentIndex: Math.floor(Math.random() * 2) , isOpen: true});
        }
    }

    closeBrain(e) {
        $('#barin_left_btn, #barin_right_btn').removeAttr("disabled", "disabled");
        Velocity($('#about_work_content > *'), "transition.expandOut", {stagger: 300, delay: 500, duration: 500, complete: ()=> {
            Velocity($('#left_brain_svg'), {translateX: 0, delay: 1000, duration: 1500});
            Velocity($('#right_brain_svg'), {translateX: 0, delay: 1000, duration: 1500});
            Velocity($('.bot_brain_svg'), "transition.slideUpBigIn", {stagger: 300, delay: 1000, duration: 500});
            this.setState({contentIndex: null, isOpen: false,});
        }});

        $('.content').removeClass("flash-bg");
    }

    render() {
        let isOpen = this.state.isOpen;

        return (
            <div className="about-work-container">
                <div className="work-barin">
                    {isOpen ? <Content content={this.state} closeBrain={this.closeBrain}/> : undefined}

                    <div className="brain">
                        <Brain onClick={this.openBrain} handleBotOpen={this.handleBotOpen} content={this.state}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;
