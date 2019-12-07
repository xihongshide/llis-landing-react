import React, { Component } from 'react';
import $ from "jquery";
import { VelocityTransitionGroup } from 'velocity-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull, faChalkboard ,faToolbox, faLanguage } from '@fortawesome/free-solid-svg-icons';

const SkillConfig = [
    {
        name: "teaching",
        icon: <FontAwesomeIcon icon={faChalkboard} />,
        details: [
            {
                name: "IELTS Test",
                description: "4.5 Years of IELTS Test tuoring experience"
            },
        ],
    },
    {
        name: "Javasctipt",
        icon: <b>Js</b>,
        details: [
            {
                name: "JavaScript",
                description: "jquery, reactJs, typescript, es6"
            }
        ]
    },
    {
        name: "front-end",
        icon: <b>FE</b>,
        details: [
            {
                name: "Experiences",
                description: "HTML5, twig, SCSS/CSS, Reasponsive Design, WCAG, bootstrap, Animations"
            }
        ],
    },
    {
        name: "core",
        icon: <FontAwesomeIcon icon={faSkull} />,
        details: [
            {
                name: "Core competitiveness",
                description: "self-Discipline, curiosity"
            }
        ]
    },
    {
        name: "tools",
        icon: <FontAwesomeIcon icon={faToolbox} />,
        details: [
            {
                name: "Tools",
                description: "git, jira, webpack, photoshop, bitbucket, npm"
            }
        ],
    },
    {
        name: "languages",
        icon: <FontAwesomeIcon icon={faLanguage} />,
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
        icon: <b>BE</b>,
        details: [
            {
                name: "experiences",
                description: "PHP/Zend, Python/Django, MySQL, NodeJs/Express"
            }
        ],
    },
];

const HoverArea = (props) => (
    <div className="skills-hexagon-container col-md-7 col-sm-12">
        <div className="skills-hexagon-innner">
            {
                SkillConfig.map((value, index) => {
                    console.log(value.icon);
                    return (
                        <div className="skill-hexagon" key={index}>
                            <button
                                className="skill-icon-btn"
                                onClick={props.handleHover}
                                onMouseEnter={props.handleHover}
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
            <div className="skills-sets-container col-md-5 col-sm-12">
                <h1>Skills</h1>
                <VelocityTransitionGroup
                    enter={{animation: "transition.slideRightBigIn", stagger: "300"}}
                    leave={{animation: "transition.slideRightBigOut", duration: "500"}}
                >
                    {active ? <p><i>{skillSet.icon}</i></p> : undefined}
                    {active ? <h2>{skillSet.name}</h2> : undefined}
                    {active ?
                        (skillSet.details.map((value, index) => {
                            return(
                                <div key={index}>
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

        let timer = setTimeout(()=>{
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
