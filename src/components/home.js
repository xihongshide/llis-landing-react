import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
// import $ from 'jquery';
// import {handleScroll} from '../utility.js';

class Home extends Component {
    render() {
        return (
            <div className="content home">
                <Carousel
                   interval = "4000"
                   indicators = "true"
                   className = "container"
                >
                    <Carousel.Item>
                        <Carousel.Caption className="home-welcome">
                            <h3>WELCOME TO LLIS LANDING </h3>
                            <p>I am Liang a.k.a. <strong>the Mad Coder</strong> a.k.a. <strong>the Impatient Lego-Builder</strong> </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption className="home-work">
                            <h3>what I do for a living?</h3>
                            <p>In one word, coding.</p>
                            <button>Explore My Weapons</button>
                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <Carousel.Caption className="home-hobby">
                            <h3>What makes me feel alive?</h3>
                            <p><strike>Work</strike><br /> Lego, Running and Coffee</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                     <Carousel.Item>
                        <Carousel.Caption className="home-game">
                            <h3>Bet ur tired of exploring?</h3>
                            <p>Play a game with me and buy me a beer if you lose. </p>
                            <button>Rock It</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Home;
