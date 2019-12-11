import React, { Component } from 'react';
import $ from "jquery";
import Velocity from 'velocity-animate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning, faBasketballBall, faCoffee, faCode, faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

const hobbyContent = [
    {
        id: 1,
        name: "run",
        title: 'Running',
        icon: <FontAwesomeIcon icon={faRunning} />,
        description:'With a strong heart and a good mind, you can do it.',
        quoteName: "– Eliud Kipchoge",
    },

    {
        id: 2,
        name: "Basketball",
        title: 'Basketball\'s life',
        icon: <FontAwesomeIcon icon={faBasketballBall} />,
        description: "The game isn't over till the clock says zero.",
        quoteName: "- Paul Pierce",
    },

    {
        id: 3,
        name: "coffee",
        title: 'coffee\'s life',
        icon: <FontAwesomeIcon icon={faCoffee} />,
        description: 'Programmers is tool to convert coffeine to code.',
        quoteName: "– an Anonymous Programmer",
    },

    {
        id: 4,
        name: "code",
        title: 'code\'s life',
        icon: <FontAwesomeIcon icon={faCode} />,
        description: 'Before software can be reusable it first has to be usable.',
        quoteName: "– Ralph Johnson",
    }
];

class HobbyContent extends React.Component {
    componentDidMount(){
        let delay = Number(this.props.content.id) * 300 + 200;
        Velocity(this.refs.slideAni, {opacity: 1,  skewX: "-11deg", translateY: 0}, {duration: 600, delay: delay});
        setTimeout(() => {
            $(".about-hobby-container").css("pointer-events", "auto");
        }, 2800);
    }

    render() {
        return (
            <div className="hobby-slide velocity-animate" ref="slideAni">
                <div className="hobby-slide-content" onMouseEnter={this.props.hoverHandler}  disabled={this.props.disabled}>
                    <div className="header-icon">{this.props.content.icon}</div>
                    <h1 className="velocity-animate">{this.props.content.title}</h1>
                    <div className="velocity-animate quote-icon"><FontAwesomeIcon icon={faQuoteLeft} /></div>
                    <p className="velocity-animate quote-desc">{this.props.content.description}</p>
                    <p className="velocity-animate quote-name">{this.props.content.quoteName}</p>
                </div>
            </div>
        );
    }
}

class HobbySlides extends Component {

    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
        };

        this.hoverHandler = this.hoverHandler.bind(this);
    }

    hoverHandler(e) {
        //lock hover events
        if (this.state.disabled) {
            return;
        }

        this.setState({disabled: true});

        let hoverElement = $(e.target).parents('.hobby-slide');
        let siblings = $(hoverElement).siblings('.hobby-slide');

        $(hoverElement).children('.hobby-slide-content').addClass('disabled');

        if($(hoverElement).width()/$(window).width() !== 0.25) {
            Velocity($(siblings).find('h1'), 'transition.slideDownBigOut', { opacity: 0, duration: 300, delay: 250});
            Velocity($(siblings).find('.quote-desc'), 'transition.slideDownBigOut', { opacity: 0, duration: 300, delay: 85});
            Velocity($(siblings).find('.quote-icon'), 'transition.slideDownBigOut', { opacity: 0, duration: 300, delay: 125});
            Velocity($(siblings).find('.quote-name'), 'transition.slideDownBigOut', { opacity: 0, duration: 300, delay: 0});
        }

        Velocity(
            $(siblings),
        {
            width: '15%',
        }, {
            duration: 500,
            easing: 'liner',
            complete: ()=> {
                this.setState({disabled: false});
                $(siblings).children('.hobby-slide-content').removeClass('disabled');
            },
        });

        Velocity(
            $(hoverElement),
        {
            width: '55%',
        }, {
            duration: 500,
            easing: 'liner',
            complete: ()=>{
                Velocity($(hoverElement).find('h1'), 'transition.slideUpBigIn', { opacity: 1, duration: 400, delay: 100});
                Velocity($(hoverElement).find('.quote-icon'), 'transition.slideLeftBigIn', { opacity: 1, duration: 300, delay: 200});
                Velocity($(hoverElement).find('.quote-desc'), 'transition.slideUpBigIn', { opacity: 1, duration: 300, delay: 300});
                Velocity($(hoverElement).find('.quote-name'), 'transition.slideRightBigIn', { opacity: 1, duration: 300, delay: 400});
            },
        });
    }

    render() {
        return (
            <div className="about-hobby-container">
                <div className="hobby-slides">
                    {hobbyContent.map((value, index) => {
                        return <HobbyContent key={index} content={value} hoverHandler={this.hoverHandler} disabled={this.state.disabled}/>;
                    })}
                </div>
            </div>
        );
    }
}

export default HobbySlides;
