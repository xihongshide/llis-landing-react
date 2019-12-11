import React, { Component } from 'react';
import Velocity from 'velocity-animate';
import $ from "jquery";
import Brain from './brain.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faCode } from '@fortawesome/free-solid-svg-icons';
import { shuffle } from '../../utility.js';

const WorkContent = [
    {
        name: 'teacher',
        title: 'IELTS Tutor',
        description: 'As my second soul, it giving me a chance to see the world from all the different perspectives of my students.',
        icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
        color: '#fff',
    },
    {
        name: 'programmer',
        title: 'Mad Programmer',
        description: 'A web developer with years of experience building and implementing powerful and efficient web applications. Loves to create and use open-source wheels.',
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
        this.timer = ()=>{};
    }

    componentDidMount() {
        $('.content').addClass("flash-bg");
        $('.explore-indicate').blast({ delimiter: 'letter' });
        const exploreLetters = shuffle($('.explore-indicate').find("span"));
        Velocity($('#left_brain_svg'), "transition.slideLeftBigIn", { delay: 800, duration: 1500});
        Velocity($('#right_brain_svg'), "transition.slideRightBigIn", { delay: 800, duration: 1500});
        Velocity($('.bot_brain_svg'), "transition.slideUpBigIn", {stagger: 200, delay: 800, duration: 500, complete: () => {
            $('.content').removeClass("flash-bg");
        }});
        Velocity($(exploreLetters), "transition.bounceIn", {stagger: 50, delay: 1200, duration: 400});

    }

    openBrain(e) {
        const self = this;
        const ele = e.target;

        $("#left_brain_svg, #right_brain_svg, .bot_brain_svg").addClass("disabled");
        this.openAnimation();
        self.setState({contentIndex: ele.getAttribute('value'), isOpen: true});
    }

    handleBotOpen(e) {
        const self = this;
        const ele =  $(e.target);

        $(ele).toggleClass("active");
        if($(".bot_brain_svg").filter(".active").length === 3) {
            $("#left_brain_svg, #right_brain_svg, .bot_brain_svg").addClass("disabled");
            this.openAnimation();
            self.setState({contentIndex: Math.floor(Math.random() * 2), isOpen: true});
        }
    }

    closeBrain() {
        Velocity($('#about_work_content > *'), "transition.expandOut", {stagger: 200, delay: 300, duration: 400, complete: ()=> {
            this.closeAnimation();
            this.setState({contentIndex: null, isOpen: false,});
        }});
    }

    openAnimation(){
        const exploreLetters = shuffle($('.explore-indicate').find("span"));
        Velocity($('#left_brain_svg'), {translateX: -500}, {easing: "ease-in-out", delay: 1000, duration: 500});
        Velocity($('#right_brain_svg'), {translateX: 500}, {easing: "ease-in-out", delay: 1000, duration: 500});
        Velocity($(exploreLetters), "transition.slideUpOut", {delay: 200, duration: 1000});
        $($('.bot_brain_svg').get().reverse()).each((value, index) => {
            Velocity($(index), "transition.slideDownBigOut", {delay: 300 + value*300, duration: 500});
        });
        $('.content').addClass("flash-bg");
    }

    closeAnimation() {
        const exploreLetters = shuffle($('.explore-indicate').find("span"));
        Velocity($('#left_brain_svg'), {translateX: 0, delay: 1000, duration: 1500});
        Velocity($('#right_brain_svg'), {translateX: 0, delay: 1000, duration: 1500});
        Velocity($('.bot_brain_svg'), "transition.slideUpBigIn", {stagger: 50, delay: 200, duration: 600});
        Velocity($(exploreLetters), "transition.bounceIn", {stagger: 50, delay: 200, duration: 400});
        $('.content').removeClass("flash-bg");
        setTimeout(()=> {
            $("#left_brain_svg, #right_brain_svg, .bot_brain_svg").removeClass("disabled");
        },1600);
    }

    render() {
        let isOpen = this.state.isOpen;

        return (
            <div className="about-work-container">
                <div className="work-barin">
                    {isOpen ? <Content content={this.state} closeBrain={this.closeBrain}/> : undefined}

                    <div className="brain">
                        <p className="explore-indicate">Explore</p>
                        <Brain onClick={this.openBrain} handleBotOpen={this.handleBotOpen} content={this.state}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;
