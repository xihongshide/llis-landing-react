import React, { Component } from 'react';
import $ from "jquery";

const tagColor = ["#78a5a3", "#e1b16a", "#ffc300", "#444c5c", "#ce5a57"];
const timelineData = [
    {
        id: "0",
        text: '<experience-1>',
        title: '<title 1>',
        category: {
	    tag: 'month day year',
	    color: tagColor[0]
	},
        link: {
            url: 'https://github.com/florinpop17/app-ideas',
            text: 'Check it out on GitHub'
        }
    },
    {
        id: "1",
        text: '<experience-2>',
        title: '<title 2>',
        category: {
	    tag: 'month day year',
	    color: tagColor[1]
	},
        link: {
            url: 'https://github.com/florinpop17/app-ideas',
            text: 'Check it out on GitHub'
        }
    },
    {
        id: "2",
        text: '<experience-2>',
        title: '<title 2>',
        category: {
	    tag: 'month day year',
	    color: tagColor[2]
	},
        link: {
            url: 'https://github.com/florinpop17/app-ideas',
            text: 'Check it out on GitHub'
        }
    },
    {
        id: "3",
        text: '<experience-3>',
        title: '<title 3>',
        category: {
	    tag: 'month day year',
	    color: tagColor[3]
	},
        link: {
            url: 'https://github.com/florinpop17/app-ideas',
            text: 'Check it out on GitHub'
        }
    },
    {
        id: "4",
        text: '<experience-4>',
        title: '<title 4>',
        category: {
	    tag: 'month day year',
	    color: tagColor[4]
	},
        link: {
            url: 'https://github.com/florinpop17/app-ideas',
            text: 'Check it out on GitHub'
        }
    },
    {
        id: "5",
        text: '<experience-5>',
        title: '<title 5>',
        category: {
            tag: 'month day year',
            color: tagColor[0]
        },
        link: {
            url: 'https://github.com/florinpop17/app-ideas',
            text: 'Check it out on GitHub'
        }
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
