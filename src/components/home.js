import React, { Component } from 'react';
import $ from "jquery";
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Velocity from 'velocity-animate';

import { randomArrElement, velocityTransitions} from '../utility.js';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = { aniHomeCopy: false };
        this.aniHomeCopy = this.aniHomeCopy.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount(){
        let $homeBlastHeader = $("#home .carousel-caption").find("h3");
        let $homeBlastdiscrip = $("#home .carousel-caption").find("p");
        $homeBlastHeader.blast({ delimiter: 'word'});
        $homeBlastdiscrip.blast({ delimiter: 'letter' });
        this.handleSelect(0);
    }

    aniHomeCopy() {
        this.setState({ aniHomeCopy: true, });
    }

    //animate home
    handleSelect(selectedIndex, e) {
        let $carouselIteam = $($("#home .carousel-caption")[selectedIndex]);
        let titleTransition = randomArrElement(velocityTransitions) + "In";
        let $homeBtn = $carouselIteam.find(".home_btn");

        $carouselIteam.find("h3 span").css("opacity","0").each(function(i){
            Velocity($(this), titleTransition, { display: "inline-block", duration: 500, delay: i*200});
        });

        $carouselIteam.find("p span").css("opacity","0").each(function(i){
            Velocity($(this), "transition.shrinkIn", { display: "inline-block", duration: 300, delay: i*50});
        });

        $homeBtn.css("opacity","0");

        setTimeout(
            () => {Velocity($homeBtn, "transition.slideUpBigIn", { display: "inline-block", duration: 500, delay: 800});},
            800
        );
    }

    render() {
        return (
            <div className="home content" id="home">
                <div className="container home-container">
                    <div className="inner-container">
                        <Carousel
                           interval = "40000"
                           indicators = "true"
                           className = "container"
                           fade = "true"
                           onSlideEnd = {this.aniHomeCopy}
                           onSelect={this.handleSelect}
                        >
                            <Carousel.Item>
                                <Carousel.Caption className="home-welcome">
                                    <div className="home-text-container">
                                        <h3>WELCOME TO LLIS LANDING</h3>
                                        <p>I am Liang a.k.a. <strong>the Mad Coder</strong> a.k.a. <strong>the Impatient Lego-Builder</strong> </p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <Carousel.Caption className="home-work">
                                    <div className="home-text-container">
                                        <h3>what I do for a living?</h3>
                                        <p>In one word, coding.</p>
                                        <div className="home-btn home_btn velocity-animate">
                                            <NavLink to="/skills" activeClassName="selected" className="skills">
                                                <button>explore more</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                             </Carousel.Item>

                             <Carousel.Item>
                                <Carousel.Caption className="home-hobby">
                                    <div className="home-text-container">
                                        <h3>What makes me feel alive?</h3>
                                        <p>Basketball, Running, Coffee and Lego</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                               <Carousel.Caption className="home-contact">
                                   <div className="home-text-container">
                                       <h3>Bet ur tired of exploring</h3>
                                       <p>Play contact me if you need anything. </p>
                                       <div className="home-btn home_btn velocity-animate">
                                           <NavLink to="/contact" activeClassName="selected" className="game">
                                               <button>contact</button>
                                           </NavLink>
                                       </div>
                                   </div>
                               </Carousel.Caption>
                             </Carousel.Item>
                             {/*
                             <Carousel.Item>
                                <Carousel.Caption className="home-game">
                                    <div className="home-text-container">
                                        <h3>Bet ur tired of exploring?</h3>
                                        <p>Play a game with me and buy me a beer if you lose. </p>
                                        <div className="home-btn home_btn velocity-animate">
                                            <NavLink to="/game" activeClassName="selected" className="game">
                                                <button>Chanllenge Me</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            */}
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
