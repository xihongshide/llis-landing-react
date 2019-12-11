import React, { Component } from 'react';
import $ from "jquery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";

const tagColor = ["#9c76a2", "#e1b16a", "#ffc300", "#444c5c", "#ce5a57"];
const timelineData = [
    {
        id: "0",
        text: '',
        location: "Linfen, China",
        title: 'Hellow World!',
        category: {
    	    tag: 'Feb, 1990',
    	    color: tagColor[0]
    	},
    },
    {
        id: "1",
        text: 'Got my Bachelor degree of Network Engineering at North University of China.',
        location: "Taiyuan, China",
        title: 'B.E.',
        category: {
	           tag: '01 Jul, 2013',
	       color: tagColor[1]
    	},
    },
    {
        id: "3",
        text: 'First day of Working as a IELTS Tutor at Taiyuan New Oriental School',
        location: "Taiyuan, China",
        title: 'Tutoring',
        category: {
            tag: '01 Mar, 2014',
            color: tagColor[4]
        },
    },
    {
        id: "2",
        text: 'Left my beloved home contry and started a new life in Ottawa, Canada.',
        location: "Ottawa, Canada",
        title: 'Big Move',
        category: {
    	    tag: '02 Sep, 2014',
    	    color: tagColor[2]
    	},
    },
    {
        id: "4",
        text: 'The first day working at Capital International Academy as an IELTS Teacher',
        location: "Ottawa, Canada",
        title: 'IELTS Teacher',
        category: {
            tag: '20 Jan, 2015',
            color: tagColor[3]
        },
    },
    {
        id: "5",
        text: 'Got my Master Degree of Electrical and Computer Engineering at Carleton University. Maybe my last day of school life.',
        location: "Ottawa, Canada",
        title: 'MEng',
        category: {
    	    tag: '10 May, 2016',
    	    color: tagColor[3]
    	},
    },
    {
        id: "6",
        text: 'Started working as a Web Developer at Launchfire Inc',
        location: "Ottawa, Canada",
        title: 'Web Developer',
        category: {
            tag: '27 Dec, 2017',
            color: tagColor[0]
        },
    },
    {
        id: "7",
        text: '',
        location: "Shanxi, China",
        title: 'To be continued...',
        category: {
            tag: '',
            color: tagColor[0]
        },
    }
];

const ScrollIndicator = (props) => <div className="scroll-indicator">{props.children}</div>;
const Arrows = (props) => <div className={`${props.direction} arrows`}><span></span><span></span><span></span></div>;

const TimelineItem = (props) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: props.data.category.color }}>
                {props.data.category.tag}
            </span>
            <h3>{props.data.title}</h3>
            <p>{props.data.text}</p>
            <small><FontAwesomeIcon icon={ faMapMarker } />{props.data.location}</small>
            {props.data.link && (
                <a
                    href={props.data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollState: "on-top",
        };

        this.onscrollHandler = this.onscrollHandler.bind(this);
    }

    onscrollHandler(e) {
        let position = $(e.target).scrollTop();

        if (position + $(e.target).innerHeight() >= e.target.scrollHeight - 40) {
            this.setState({scrollState: "on-bot"});
        } else if (position <= 0) {
            this.setState({scrollState: "on-top"});
        } else {
            this.setState({scrollState: "on-mid"});
        }
    }

    render() {
        return (
            <div className="timeline-main-container container">
                <ScrollIndicator>
                    <div className="scroll-indicator">
                    {this.state.scrollState !== "on-top"? <Arrows direction="arrows-top" />:""}
                    <div className="mouse"></div>
                    {this.state.scrollState !== "on-bot"? <Arrows direction="arrows-bot" />:""}
                    </div>
                </ScrollIndicator>

                <div className="timeline-outter-container" onScroll={this.onscrollHandler}>
            		<div className={`${this.state.scrollState} scroll-content`}>
            		    <div className="timeline-innner-container">
            			{timelineData.map((data, idx) => (
            				<TimelineItem data={data} key={idx} />
            			))}
            		    </div>
            		</div>
                </div>
            </div>
        );
    }
}

export default Timeline;
