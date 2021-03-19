import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faHeart, faCoffee, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { VelocityComponent } from 'velocity-react';
import $ from "jquery";

//Partial Components
import SocialNetworkList from './partialComponents/socialNetworkList.js';

const FooterInfo = (props) => (
    <div>
        <SocialNetworkList />
        <button onClick={ props.toggleInfo }><FontAwesomeIcon icon={ faChevronDown } /></button>
        <p><span>&copy; 2021</span> Made by LLI with <FontAwesomeIcon icon={ faHeart } /> and <FontAwesomeIcon icon={ faCoffee } /></p>
    </div>
);

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { animated: false };
        this.toggleInfo = this.toggleInfo.bind(this);
    }

    toggleInfo(e) {
        e.preventDefault();
        $(".content, .header").on("click", ()=> this.setState({ animated: false }));
        this.setState({ animated: !this.state.animated });
    }

    render() {
        const animation = this.state.animated;

        return (
            <footer className="footer">
                <div className="footer-container">
                    {/*
                    <div className="start-game-icon">
                        <VelocityComponent animation={ !animation ? 'transition.slideLeftIn' : 'transition.slideLeftOut' }>
                            <button onClick={ this.toggleInfo }>
                                <FontAwesomeIcon icon={ faChessKnight } />
                            </button>
                        </VelocityComponent>

                    </div>
                    */}

                    <VelocityComponent
                        animation={animation ? 'transition.slideUpBigIn' : 'transition.slideDownBigOut'}
                        delay={animation ? "600" : "200"}
                        duration={animation ? "400" : "400"}
                    >
                        <div className="info-wrapper">
                            <FooterInfo toggleInfo={ this.toggleInfo }/>
                        </div>
                    </VelocityComponent>

                    <div className="info-icon">
                        <VelocityComponent
                            animation={!animation ? 'transition.slideRightIn' : 'transition.slideRightOut'}
                            delay={!animation ? "600" : "200"}
                            duration={!animation ? "400" : "400"}
                        >
                            <button onClick={ this.toggleInfo }>
                                <FontAwesomeIcon icon={ faInfoCircle } />
                            </button>
                        </VelocityComponent>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
