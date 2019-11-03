import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKnight, faInfoCircle, faChevronDown, faHeart, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { VelocityComponent } from 'velocity-react';

function FooterInfo(props) {
    return(
        <div>
            <ul>
                <li>
                    <a href="https://github.com/xihongshide/MY.git" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } /></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100008402794110" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faFacebook } /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/leon-liang-li" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedinIn } /></a>
                </li>
                <li>
                    <a href="mailto:liangli.0311@gmail.com" target="_top"><FontAwesomeIcon icon={ faPaperPlane } /></a>
                </li>
                <li>
                    <a onClick={ props.toggleInfo }><FontAwesomeIcon icon={ faChevronDown } /></a>
                </li>
            </ul>

            <p><span>&copy; 2019</span> Made by LLI with <FontAwesomeIcon icon={ faHeart } /> and <FontAwesomeIcon icon={ faCoffee } /></p>
        </div>
    );
}

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
