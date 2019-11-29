import React, { Component } from 'react';
import Velocity from 'velocity-animate';
import $ from "jquery";

const SkillConfig = [
    {
        name: "core",
        icon: "icon",
        time: "1 Years",
        experience: ["Self-Discipline", "Curiosity"]
    },
    {
        name: "js",
        icon: "icon",
        time: "4 Years",
        experience: ["Self-Discipline", "Curiosity"]
    },
    {
        name: "front-end",
        icon: "icon",
        time: "1 Years",
        experience: ["Self-Discipline", "Curiosity"]
    },
    {
        name: "back-end",
        icon: "icon",
        time: "1 Years",
        experience: ["Self-Discipline", "Curiosity"]
    },
    {
        name: "tools",
        icon: "icon",
        time: "1 Years",
        experience: ["Self-Discipline", "Curiosity"]
    },
    {
        name: "teaching",
        icon: "icon",
        time: "1 Years",
        experience: ["Self-Discipline", "Curiosity"]
    },
    {
        name: "language",
        icon: "icon",
        time: "1 Years",
        experience: ["Self-Discipline", "Curiosity"]
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
                        onClick={props.handleChange}
                        onMouseEnter={props.handleChange}
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
    componentDidUpdate() {
        console.log("test");
        Velocity($('.skills-container .skills-inner'), "transition.slideRightBigIn", {delay: 100, duration: 1000});
        Velocity($('.skills-inner .skills-ani'), "transition.slideRightBigIn", {stagger:300, delay: 1000, duration: 1000});
    };

    render() {
        let props = this.props;
        let activeSkillIndex = SkillConfig[props.activeSkillIndex];

        if (activeSkillIndex && activeSkillIndex !== 9) {
            return (
                <div className="skills-inner velocity-animate">
                    <i className="skills-ani velocity-animate">{activeSkillIndex.icon}</i>
                    <h1 className="skills-ani velocity-animate">{activeSkillIndex.name}</h1>
                    <p className="skills-ani velocity-animate">
                        <b>Years: </b>
                        <span>{activeSkillIndex.time}</span>
                    </p>
                    <p className="skills-ani velocity-animate">
                        <b>Experience: </b>
                        <span>{activeSkillIndex.experience}</span>
                    </p>
                </div>
            );
        }else {
            return (
                <div className="skills-inner velocity-animate">
                    <h2 className="skills-ani velocity-animate">Self-Discipline</h2>
                    <h3 className="skills-ani velocity-animate">Curiosity</h3>
                </div>
            );
        }
    };
};

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSkillIndex: 9,
        };

        this.lock = false;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let self = this;

        if(self.lock)
            return;

        self.lock = true;
        let button = $(e.target);
        let activeSkillIndex = $(button).attr("dataindex");

        self.setState({activeSkillIndex: activeSkillIndex,});
        $(button).on("mouseleave", () => self.setState({activeSkillIndex: 9,}))

        self.lock = false
    }

    render() {
        return (
            <div className="content skills">
                <div className="skills-contaner row">
                    <HoverArea handleChange = {this.handleChange}/>
                    <div className="skills-container col-md-6 col-sm-12">
                        <SkillsDetails activeSkillIndex = {this.state.activeSkillIndex} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
