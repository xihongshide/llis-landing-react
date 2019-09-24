import React, { Component } from 'react';

//wheel components
import Carousel from 'react-bootstrap/Carousel';

//custome components
import Home from './home.js';
import About from './about.js';
import Skills from './skills.js';
import Blog from './blog.js';
import Contact from './contact.js';

class Content extends Component {
    constructor(props) {
        super(props);

        console.log("Content props:");
        console.log(props);
        this.state = {
            "activePanel": this.props.panelIndex
        };
    }

    render() {
        let panelIndex = this.props.panelIndex;

        return (
            <div className="content">
                <Carousel
                    activeIndex={panelIndex}
                    slide="false"
                    keyboard="false"
                    controls="true"
                    fade="true"
                    indicators="true"
                    onSelect={console.log("onchange panel")}
                >
                    <Carousel.Item>
                        <Home/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <About/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Skills/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Blog/>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <Contact/>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Content;
