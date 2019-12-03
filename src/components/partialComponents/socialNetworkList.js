import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedinIn, faInstagram, faWeixin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

const SocialNestworkList = () => (
    <ul className="social-network-list">
        <li>
            <a href="https://github.com/xihongshide/MY.git" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } /></a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/leon-liang-li" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedinIn } /></a>
        </li>
        <li>
            <a href="https://www.instagram.com/l.liiiiii/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faInstagram } /></a>
        </li>
        <li>
            <a href="mailto:liangli.0311@gmail.com" target="_top"><FontAwesomeIcon icon={ faEnvelope } /></a>
        </li>
        <li>
            <a href="https://www.instagram.com/l.liiiiii/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faWeixin } /></a>
        </li>
    </ul>
);

export default SocialNestworkList;
