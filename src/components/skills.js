import React, { Component } from 'react';

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
                    >
                       <span>{SkillConfig[index].name[0]}</span>
                    </button>
                );
            })
        }
    </div>
);

const SkillsDetails = (props) => (
    <div className="skills-container col-md-6 col-sm-12">
        <div className="skills-innner">
            <i>{SkillConfig[props.activeSkill].icon}</i>
            <h1>{SkillConfig[props.activeSkill].name}</h1>
            <p>
                <b>Years: </b>
                <span>{SkillConfig[props.activeSkill].time}</span>
            </p>
            <p>
                <b>Experience: </b>
                <span>{SkillConfig[props.activeSkill].experience}</span>
            </p>
        </div>
    </div>
);

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSkill: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let activeSkill = e.target.key;
        console.log(e.target.key);
        this.setState({
            activeSkill: activeSkill,
        });
    }

    render() {
        return (
            <div className="content skills">
                <div className="skills-contaner row">
                    <HoverArea handleChange = {this.handleChange}/>
                    <SkillsDetails activeSkill = {this.state.activeSkill} />
                </div>
            </div>
        );
    }
}

export default Skills;
