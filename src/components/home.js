import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Home extends Component {
   render() {
      return (
         <div className="content home">
             <Carousel
                interval = "5000"
                indicators = "true"
                className = "container"
             >
                 <Carousel.Item>
                     <Carousel.Caption>
                         <h3>WELCOME TO LLIS LANDING</h3>
                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                     </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item>
                     <Carousel.Caption>
                         <h3>what I do for a living?</h3>
                         <p>In one word, coding.</p>
                         <button>Explore My Weapons</button>
                     </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                     <Carousel.Caption>
                         <h3>[hobby]</h3>
                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                     </Carousel.Caption>
                 </Carousel.Item>
                  <Carousel.Item>
                     <Carousel.Caption>
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
