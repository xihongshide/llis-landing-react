import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChessKnight, faInfoCircle, faHeart, faCoffee, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { VelocityComponent } from 'velocity-react';

//Partial Components
import SocialNetworkList from './partialComponents/socialNetworkList.js';

const FooterInfo = (props) => (
    <div>
        <SocialNetworkList />
        <button onClick={ props.toggleInfo }><FontAwesomeIcon icon={ faChevronDown } /></button>
        <p><span>&copy; 2019</span> Made by LLI with <FontAwesomeIcon icon={ faHeart } /> and <FontAwesomeIcon icon={ faCoffee } /></p>
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
        this.setState({ animated: !this.state.animated });
    }

    render() {
        const animation = this.state.animated;

        return (
            <footer className="footer">
                <div className="footer-container">
                    <div className="start-game-icon">
                        <VelocityComponent animation={ !animation ? 'transition.slideLeftIn' : 'transition.slideLeftOut' }>
                            <button onClick={ this.toggleInfo }>
                                <FontAwesomeIcon icon={ faChessKnight } />
                            </button>
                        </VelocityComponent>

                    </div>

                    <VelocityComponent animation={ this.state.animated ? 'transition.slideUpBigIn' : 'transition.slideDownBigOut' }>
                        <div className="info-wrapper">
                            <FooterInfo toggleInfo={ this.toggleInfo }/>
                        </div>
                    </VelocityComponent>

                    <div className="info-icon">
                        <VelocityComponent animation={ !this.state.animated ? 'transition.slideRightIn' : 'transition.slideRightOut' }>
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
