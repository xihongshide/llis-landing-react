import React, { Component } from 'react';
import Velocity from 'velocity-animate';
import capitalize from '../utility.js';
import $ from "jquery";
import journeySvg from '../assets/svgs/destination.svg';

//Partial Components
import Timeline from './partialComponents/aboutTimeline.js';

const workAniElements = ['1', '2', '3', '4', '5', '6', '7'];
const hobbyHeartElements = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Unexpanded  Component
const AboutHobby = (props) => <div className="hobby-col about-col">{props.children}</div>;
const AboutWork = (props) => <div className="work-col about-col">{props.children}</div>;
const AboutJourney = (props) => <div className="journey-col about-col">{props.children}</div>;

//expanded Components
const AboutJourneyExpand = (props) => <div className="about-expanded"><Timeline /></div>;
const AboutWorkExpand = (props) => <div className="about-expanded"><Timeline /></div>;
const AboutHobbyExpand = (props) => <div className="about-expanded"><Timeline /></div>;

class AboutUnexpand extends Component {
    componentDidMount(){
        Velocity(this.refs.ani1, "transition.shrinkIn", { display: "inline-block", duration: 800, delay: 800});
        Velocity(this.refs.ani2, "transition.shrinkIn", { display: "inline-block", duration: 800, delay: 1100});
        Velocity(this.refs.ani3, "transition.shrinkIn", { display: "inline-block", duration: 800, delay: 1400});
    }

    render() {
       return (
           <div className="col-container">
               <div className={`about-hobby about-cols`} ref="ani1">
                   <AboutHobby name="hobby" expandHandler={this.props.expandHandler}>
                       <button onClick={this.props.expandHandler} id="1">Love</button>
                       <div className="hobby-heart about-icon">
                           <div className="hobby-heart-container">
                               {hobbyHeartElements.map((value, index) => {
                                   return <div key={`heart_piece_${index}`} className={`heart-piece-${index}`}></div>;
                               })}
                           </div>
                       </div>
                   </AboutHobby>
               </div>
               <div className={`about-work about-cols`} ref="ani2">
                   <AboutWork name="work" expandHandler={this.props.expandHandler}>
                       <button onClick={this.props.expandHandler} id="2">Work</button>
                       <div className="code-view-container about-icon">
                           <div className="code-view">
                               {workAniElements.map((value, index) => {
                                   return <span key={`line_${index+1}`} className={`line-${index+1}`}></span>;
                               })}
                           </div>
                       </div>
                   </AboutWork>
               </div>
               <div className={`about-journey about-cols`} ref="ani3">
                   <AboutJourney name="journey" expandHandler={this.props.expandHandler}>
                       <button  onClick={this.props.expandHandler} id="3">Journey</button>
                       <div className="about-icon"><img src={journeySvg}/></div>
                   </AboutJourney>
               </div>
          </div>
       );
   }
}

class AboutExpand extends Component {
    componentDidMount() {
        Velocity(this.refs.panelBox, "transition.expandIn", { display: "block", duration: 800, delay: 100});
    }

    render() {
       const panels = [
           <AboutHobbyExpand />,
           <AboutWorkExpand />,
           <AboutJourneyExpand />,
       ];

       const correctPanel = panels[this.props.panelIndex];

       return (
           <div className="panel-box velocity-animate" ref="panelBox">
               {correctPanel}
               <div className="about-close"><button onClick={this.props.unexpandHandler}></button></div>
           </div>
       );
   }
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panelIndex: 0,
        };

        this.expanded = this.expanded.bind(this);
        this.unexpanded = this.unexpanded.bind(this);
    }

    expanded(e) {
        this.setState({panelIndex: Number(e.target.id)});
    }

    unexpanded(){
        this.setState({panelIndex: 0});
    }

    render() {
        let panelIndex = this.state.panelIndex;

        return (
            <div className="about content">
                <div className="container">
                    { !panelIndex ?
                        <AboutUnexpand expandHandler={this.expanded}/>:
                        <AboutExpand panelIndex={panelIndex} unexpandHandler={this.unexpanded} />
                    }
                </div>
            </div>
        );
    }
}

export default About;
