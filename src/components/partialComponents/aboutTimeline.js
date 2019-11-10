import React, { Component } from 'react';
import $ from "jquery";
const tagColor = ["#78a5a3", "#e1b16a", "#ffc300", "#444c5c", "#ce5a57"];

const timelineData = [
    {
        id: "0",
        text: '<experience-1>',
        date: '<date 1>',
        category: {
			tag: 'experience-1',
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
        date: '<date 2>',
        category: {
			tag: 'experience-2',
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
        date: '<date 2>',
        category: {
			tag: 'experience-2',
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
        date: '<date 3>',
        category: {
			tag: 'experience-3',
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
        date: '<date 4>',
        category: {
			tag: 'experience-4',
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
        date: '<date 5>',
        category: {
            tag: 'experience-5',
            color: tagColor[0]
        },
        link: {
            url: 'https://github.com/florinpop17/app-ideas',
            text: 'Check it out on GitHub'
        }
    }
];

const TimelineItem = (props) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: props.data.category.color }}>
                {props.data.category.tag}
            </span>
            <time>{props.data.date}</time>
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
        console.log($(e.target).innerHeight());
        console.log(position);
        console.log(e.target.scrollHeight);

        if (position + $(e.target).innerHeight() >= e.target.scrollHeight - 40) {
            this.setState({scrollState: "on-bot"});
        } else if (position <= 0) {
            this.setState({scrollState: "on-top"});
        } else {
            this.setState({scrollState: "on-mid"});
        }
    }

    render() {
        let scrollClassName = "";
        return (
            <div className="timeline-outter-container" onScroll={this.onscrollHandler}>
    			<div className= {this.state.scrollState}>
    				<div className="timeline-innner-container">
    					{timelineData.map((data, idx) => (
    						<TimelineItem data={data} key={idx} />
    					))}
    				</div>
    			</div>
            </div>
        );
    }
}

export default Timeline;
