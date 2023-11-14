import React, { Component } from 'react';
import $ from "jquery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker, faPlane, faCloudRain, faSnowflake} from "@fortawesome/free-solid-svg-icons";

const tagColor = ["#9c76a2", "#e1b16a", "#ffc300", "#444c5c", "#ce5a57", "#bcbcbc", "#ff8243"];
const timelineData = [
    {
        id: "0",
        text: '',
        location: "Linfen, China",
        title: 'Hello World!',
        category: {
    	    tag: '07 Feb, 1990',
    	    color: tagColor[0]
    	},
    },
    {
        id: "1",
        text: 'NBA Final: Celtics Big 3 vs Kobe Bryant, BOS wins 4-2',
        location: "Linfen, China",
        title: 'Became a dead Fan of Boston Celtics',
        category: {
            tag: '08 Jun, 2008',
            color: tagColor[5]
        },
    },
    {
        id: "2",
        text: 'Got my Bachelor degree of Network Engineering',
        location: "North University of China, Taiyuan, China",
        title: 'B.E. Day',
        category: {
	           tag: '01 Jul, 2013',
	       color: tagColor[3]
    	},
    },
    {
        id: "3",
        text: 'Started Working as an IELTS Tutor',
        location: "Taiyuan New Oriental School, Taiyuan, China",
        title: 'Tutoring',
        category: {
            tag: 'Mar, 2014',
            color: tagColor[4]
        },
    },
    {
        id: "4",
        text: 'Left my beloved home country and moved to Ottawa, Canada',
        location: <span>China<FontAwesomeIcon className="icon-plane" icon={faPlane} /> <FontAwesomeIcon icon={faMapMarker} /> Ottawa, Canada</span>,
        title: 'Big Move',
        category: {
    	    tag: '02 Sep, 2014',
    	    color: tagColor[2]
    	},
    },
    {
        id: "5",
        text: 'Joined the family of Capital International Academy',
        location: "Capital International Academy, Ottawa, Canada",
        title: 'IELTS Teacher',
        category: {
            tag: '20 Jan, 2015',
            color: tagColor[5]
        },
    },
    {
        id: "6",
        text: 'Master\'s degree achieved. Last day of school life',
        location: "Carleton University, Ottawa, Canada",
        title: 'MEng',
        category: {
    	    tag: '10 May, 2016',
            color: tagColor[6]

        },
    },
    {
        id: "7",
        text: 'Became a Launchfirer working in the Dev team',
        location: "Launchfire Interactive Inc., Ottawa, Canada",
        title: 'Web Developer',
        category: {
            tag: '27 Dec, 2017',
            color: tagColor[3]
        },
    },
    {
        id: "8",
        text: 'LemonadeLXP',
        location: "LemonadeLXP, Ottawa, Canada",
        title: 'Web Developer',
        category: {
            tag: '01 Jan, 2023',
            color: tagColor[5]
        },
    },
    {
        id: "9",
        text: <FontAwesomeIcon icon={faCloudRain} />,
        location: <span>Ottawa, Canada<FontAwesomeIcon className="icon-plane" icon={faPlane} /> <FontAwesomeIcon icon={faMapMarker} /> Raincouver, Canada</span>,
        title: 'West Coast Move',
        category: {
            tag: 'Jun, 2020',
            color: tagColor[2]
        },
    },
    {
        id: "10",
        text: 'Future is clouded and uncertain :-)',
        location: "Earth",
        title: 'To be continued...',
        category: {
            tag: 'Future',
            color: tagColor[6]
        },
    },
];

const ScrollIndicator = (props) => <div className="scroll-indicator">{props.children}</div>;
const Arrows = (props) => <div className={`${props.direction} arrows`}><span></span><span></span><span></span></div>;

const TimelineItem = (props) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <h3>{props.data.title}</h3>
            <span className="tag" style={{ background: props.data.category.color }}>
                {props.data.category.tag}
            </span>
            <p>{props.data.text}</p>
            <small><FontAwesomeIcon icon={faMapMarker} />{props.data.location}</small>
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
