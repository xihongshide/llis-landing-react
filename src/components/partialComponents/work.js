import React, { Component } from 'react';
import Velocity from 'velocity-animate';
import $ from "jquery";

class Work extends Component {
    constructor(props) {
        super(props);

        this.expand = this.expand.bind(this);
        this.unexpand = this.unexpand.bind(this);
    }

    expand(e) {
        let expandElement = $(e.target).parents(".work_slider");

        Velocity($(expandElement).siblings(".work_slider"), {
            width: 0,
        }, {
            duration: 600,
            easing: [ 0.17, 0.67, 0.83, 0.67 ],
            delay: 400,
            opacity: 0,
            complete: () => $(this).hide(),
        });

        Velocity($(expandElement), {
            width: '100%',
        }, {
            duration: 600,
            easing: [0.17, 0.67, 0.83, 0.67],
            delay: 400,
        });
    }

    unexpand(e) {
        let expandElement = $(e.target).parents(".work_slider");

        $(expandElement).siblings(".work_slider").show(()=>{Velocity($(this), {
                width: '50%',
            }, {
                duration: 600,
                easing: [ 0.17, 0.67, 0.83, 0.67 ],
                delay: 400,
                opacity: 1,
            });
        });

        Velocity($(expandElement), {
            width: '50%',
        }, {
            duration: 600,
            easing: [0.17, 0.67, 0.83, 0.67],
            delay: 400,
        });
    }

    render() {
        return (
            <div className="about-work-container">
                <div className="work-left work_slider">
                    <div className="work-content">
                        <button onClick={this.expand}>
                            <i className="fas fa-chalkboard-teacher"></i>
                        </button>
                    </div>
                </div>

                <div className="work-right work_slider">
                    <div className="work-content">
                        <i class="fas fa-laptop-code"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;
