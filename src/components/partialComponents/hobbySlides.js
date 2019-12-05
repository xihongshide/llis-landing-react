import React, { Component } from 'react';
import $ from "jquery";
import Velocity from 'velocity-animate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning, faBasketballBall, faCoffee, faCode } from '@fortawesome/free-solid-svg-icons';

const hobbyContent = [
    {
      id: 1,
      name: "run",
      title: 'Running\'s life',
      icon: <FontAwesomeIcon icon={faRunning} />,
      description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },

    {
      id: 2,
      name: "Basketball",
      title: 'Ball\'s life',
      icon: <FontAwesomeIcon icon={faBasketballBall} />,
      description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },

    {
      id: 3,
      name: "coffee",
      title: 'coffee\'s life',
      icon: <FontAwesomeIcon icon={faCoffee} />,
      description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },

    {
      id: 4,
      name: "code",
      title: 'code\'s life',
      icon: <FontAwesomeIcon icon={faCode} />,
      description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    }
];

class HobbyContent extends React.Component {
    componentDidMount(){
        let delay = Number(this.props.content.id) * 300 + 200;
        Velocity(this.refs.slideAni, {opacity: 1,  skewX: "-11deg", translateY: 0}, {duration: 600, delay: delay});
        setTimeout(() => {
            $(".about-hobby-container").css("pointer-events", "auto");
        }, 2000);
    }

    render() {
        return (
            <div className="hobby-slide velocity-animate" ref="slideAni">
                <div className="hobby-slide-content" onMouseEnter={this.props.hoverHandler}  disabled={this.props.disabled}>
                    {this.props.content.icon}
                    <h1 className="velocity-animate">{this.props.content.title}</h1>
                    <p className="velocity-animate">{this.props.content.description}</p>
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

        Velocity($(siblings).find('h1'), 'transition.slideDownBigOut', { opacity: 0, duration: 300, delay: 200});
        Velocity($(siblings).find('p'), 'transition.slideDownBigOut', { opacity: 0, duration: 300, delay: 300});

        Velocity(
            $(siblings),
        {
            width: '15%',
        }, {
            duration: 300,
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
            duration: 300,
            easing: 'liner',
            complete: ()=>{
                Velocity($(hoverElement).find('h1'), 'transition.slideUpBigIn', { opacity: 1, duration: 300, delay: 200});
                Velocity($(hoverElement).find('p'), 'transition.slideUpBigIn', { opacity: 1, duration: 300, delay: 300});
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
