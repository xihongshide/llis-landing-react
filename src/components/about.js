import React, { Component } from 'react';
import Velocity from 'velocity-animate';
import $ from "jquery";

//Partial Components
import Timeline from './partialComponents/aboutTimeline.js';
import AniHeart from './partialComponents/aniHeart.js';
import CodeView from './partialComponents/codeView.js';

//Unexpanded  Component
const AboutHobby = (props) => <div className="hobby-col about-col">{props.children}</div>;
const AboutWork = (props) => <div className="work-col about-col">{props.children}</div>;
const AboutJourney = (props) => <div className="journey-col about-col">{props.children}</div>;

//expanded Components
const AboutHobbyExpand = (props) => <div className="about-expanded">hobby</div>;
const AboutWorkExpand = (props) => <div className="about-expanded">work</div>;
const AboutJourneyExpand = (props) => <div className="about-expanded"><Timeline /></div>;


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
                   <AboutHobby name="hobby">
                       <AniHeart onClick={this.props.expandHandler} />
                       <button onClick={this.props.expandHandler} data-id="1"><span>Love</span></button>
                   </AboutHobby>
               </div>
               <div className={`about-work about-cols`} ref="ani2">
                   <AboutWork name="work">
                       <div className="work-icon-wapper about-icon">
                           <span className="top"></span>
                           <span className="bottom"></span>
                       </div>
                       <button onClick={this.props.expandHandler} data-id="2"><span>Work</span></button>
                   </AboutWork>
               </div>
               <div className={`about-journey about-cols`} ref="ani3">
                   <AboutJourney name="journey">
                       <div className="about-icon">
                           <div className="pin"></div>
                           <div className='pulse'></div>
                       </div>
                       <button  onClick={this.props.expandHandler} data-id="3"><span>Journey</span></button>
                   </AboutJourney>
               </div>
          </div>
       );
   }
}

class AboutExpand extends Component {
    componentDidMount() {
        Velocity(this.refs.panelBox, "transition.expandIn", { display: "block", duration: 200, delay: 100});
        Velocity(this.refs.aboutBackBtn, "transition.slideRightBigIn", { display: "block", duration: 300, delay: 800});
    }

    render() {
       const panels = [
           <AboutHobbyExpand />,
           <AboutWorkExpand />,
           <AboutJourneyExpand />,
       ];

       const correctPanel = panels[this.props.panelIndex-1];

       return (
           <div className="panel-box velocity-animate" ref="panelBox">
               {correctPanel}
               <div className="about-close velocity-animate" ref="aboutBackBtn"><button onClick={this.props.unexpandHandler}></button></div>
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
        this.setState({panelIndex: Number($(e.target).attr("data-id"))});
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
