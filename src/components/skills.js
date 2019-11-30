import React, { Component } from 'react';
import $ from "jquery";
import Velocity from "velocity-animate";
import { VelocityTransitionGroup } from 'velocity-react';

const SkillConfig = [
    {
        name: "core",
        icon: "core icon",
        details: [
            {
                name: "competitivenesssaf",
                description: ["Self-Discipline1", "Curiosity2"]
            }
        ]
    },
    {
        name: "js",
        icon: "js icon",
        details: [
            {
                name: "JS libs",
                description: "Jquery, ReactJs"
            }
        ]
    },
    {
        name: "front-end",
        icon: "front-end icon",
        details: [
            {
                name: "experiences",
                description: "HTML5, SCSS/CSS, Reasponsive Design, WCAG, Animation"
            }
        ],
    },
    {
        name: "back-end",
        icon: "back-end icon",
        details: [
            {
                name: "experiences",
                description: "PHP/Zend, Python, MySQL, NodeJs"
            }
        ],
    },
    {
        name: "teaching",
        icon: "teaching icon",
        details: [
            {
                name: "IELTS",
                description: "4.5 Years"
            },
        ],
    },
    {
        name: "tools",
        icon: "tools icon",
        details: [
            {
                name: "tools",
                description: "Git, Jira, webpack, Photoshop, bitbucket, Npm"
            }
        ],
    },
    {
        name: "language",
        icon: "language icon",
        details: [
            {
                name: "Mandarin",
                description: "Mathertone"
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
    }
];

const HoverArea = (props) => (
    <div className="hover-skill-icons-container col-md-6 col-sm-12">
        {
            SkillConfig.map((value, index) => {
                return (
                    <button
                        className="hover-skill-icons"
                        key={index}
                        onClick={props.handleHover}
                        onMouseEnter={props.handleHover}
                        dataindex={index}
                    >
                       <span>{value.name[0]}</span>
                    </button>
                );
            })
        }
    </div>
);

class SkillsDetails extends Component {
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
            <div className="skills-container col-md-6 col-sm-12">
                <h1>header</h1>
                <VelocityTransitionGroup enter={{animation: "transition.slideRightBigIn", stagger: "300"}} leave={{animation: "transition.slideRightBigOut"}}>
                    {active ? <p className="skills-ani"><i>{skillSet.icon}</i></p> : undefined}
                    {active ? <h2 className="skills-ani">{skillSet.name}</h2> : undefined}
                    {active ?
                        (skillSet.details.map((value, index) => {
                            return(
                                <div className="skills-ani" key={index}>
                                    <b>{value.name}: </b>
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
        let self = this;

        if(self.lock)
            return;

        self.lock = true;
        let button = $(e.target);
        let activeIndex = $(button).attr("dataindex");

        self.setState({activeIndex: activeIndex, active: true});
        $(button).on("mouseleave", () => self.setState({active: false}));

        self.lock = false;
    }

    render() {
        return (
            <div className="content skills">
                <div className="skills-contaner no-margin row">
                    <HoverArea handleHover={this.handleHover} />
                    <SkillsDetails activeState={this.state}/>
                </div>
            </div>
        );
    }
}

export default Skills;
