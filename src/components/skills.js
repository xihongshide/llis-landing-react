import React, { Component } from 'react';
import $ from "jquery";
import Velocity from 'velocity-animate';
import { VelocityTransitionGroup } from 'velocity-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faServer, faSkull, faChalkboardTeacher ,faToolbox, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { shuffle} from '../utility.js';

const SkillConfig = [
    {
        name: "Teaching",
        icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
        color: "#4FC08D",
        details: [
            {
                name: "IELTS tutoring",
                description: "4.5 Years of IELTS Test tuoring experience"
            },
        ],
    },
    {
        name: "Javasctipt",
        icon: <FontAwesomeIcon icon={faJsSquare} />,
        color: "#F7DF1E",
        details: [
            {
                name: "JavaScript",
                description: "Jquery, ReactJs, Typescript, ES6"
            }
        ]
    },
    {
        name: "Front-end",
        icon: <FontAwesomeIcon icon={faPaintBrush} />,
        color: "#CC6699",
        details: [
            {
                name: "Experiences",
                description: "HTML5, Twig, SCSS/CSS, Reasponsive Design, WCAG, Bootstrap, Responsive Design, Cross Browser Testing"
            }
        ],
    },
    {
        name: "Core",
        icon: <FontAwesomeIcon icon={faSkull} />,
        color: "#66595C",
        details: [
            {
                name: "Core competitiveness",
                description: "Self-Discipline, Curiosity"
            }
        ]
    },
    {
        name: "Tools",
        icon: <FontAwesomeIcon icon={faToolbox} />,
        color: "#8DD6F9",
        details: [
            {
                name: "Tools",
                description: "Git, Webpack, Bitbucket, npm"
            }
        ],
    },
    {
        name: "languages",
        icon: <FontAwesomeIcon icon={faLanguage} />,
        color: "#ce5a57",
        details: [
            {
                name: "Mandarin",
                description: "mathertone"
            },
            {
                name: "English",
                description: "proficient"
            },
            {
                name: "French",
                description: "le débutant"
            }
        ],
    },
    {
        name: "back-end",
        icon: <FontAwesomeIcon icon={faServer} />,
        color: "#3776AB",
        details: [
            {
                name: "Experiences",
                description: "PHP/Zend, Python/Django, MySQL, NodeJs/Express"
            }
        ],
    },
];

class HoverArea extends Component {
    componentDidMount(){
        let elements = shuffle($(".skill-hexagon"));
        $(elements).each((i, e) => {
            Velocity($(e), {opacity: 1}, {delay: 500+200*i, duration: 800});
        });
    }

    render () {
        return (
            <div className="skills-hexagon-container col-md-7 col-sm-12">
                <div className="skills-hexagon-innner">
                    {
                        SkillConfig.map((value, index) => {
                            return (
                                <div className="skill-hexagon velocity-animate" key={index}>
                                    <button
                                        className="skill-icon-btn"
                                        onClick={this.props.handleHover}
                                        onMouseEnter={this.props.handleHover}
                                        dataindex={index}
                                    >
                                        <span>{value.icon}</span>
                                    </button>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

class SkillsDetails extends Component {
    componentDidMount(){
        Velocity($("#skills-sets-header"), "transition.slideRightBigIn", {opacity: 1, delay: 1500, duration: 1000});
    }
    render() {
        const props = this.props;
        let activeIndex = props.activeState.activeIndex;
        let active = props.activeState.active;
        let skillSet = SkillConfig[activeIndex];

        if (!activeIndex || !active){
            activeIndex = 0;
            active = false;
        }

        return (
            <div className="skills-sets-container col-md-5 col-sm-12">
                <h1 id="skills-sets-header" className="velocity-animate">Skills</h1>
                <VelocityTransitionGroup
                    enter={{animation: "transition.slideRightBigIn", stagger: "300"}}
                    leave={{animation: "transition.slideRightBigOut", duration: "500"}}
                >
                    {active ? <p><i style={{color: skillSet.color}}>{skillSet.icon}</i></p> : undefined}
                    {active ? <h2>{skillSet.name}</h2> : undefined}
                    {active ?
                        (skillSet.details.map((value, index) => {
                            return(
                                <div className="skill-experience" key={index}>
                                    <b>{value.name}:</b>&nbsp;&nbsp;
                                    <span>{value.description}</span>
                                </div>
                            );
                        })): undefined
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            active: false,
        };
        this.lock = false;
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(e) {
        e.preventDefault();
        let self = this;

        if(self.lock)
            return;
        self.lock = true;

        const button = $(e.target);

        let timer = setTimeout(()=> {
            $(".skills-container").css("pointer-event", "none");
            let activeIndex = $(button).attr("dataindex");
            self.setState({activeIndex: activeIndex, active: true});
            self.lock = false;
        }, 500);

        $(button).on("mouseleave", () => {
            self.setState({active: false});
            clearTimeout(timer);
            self.lock = false;
        });
    }

    render() {
        return (
            <div className="content skills">
                <div className="skills-container container">
                    <div className='inner-container no-margin row'>
                        <HoverArea handleHover={this.handleHover} />
                        <SkillsDetails activeState={this.state}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
