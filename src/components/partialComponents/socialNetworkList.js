import React from 'react';
import $ from "jquery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faInstagram, faWeixin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

const SocialNetworkList = () => (
    <ul className="social-network-list">
        <li>
            <a href="https://github.com/xihongshide" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } /></a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/madlli" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedinIn } /></a>
        </li>
        <li>
            <a href="https://www.instagram.com/l.liiiiii/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faInstagram } /></a>
        </li>
        <li>
            <a href="mailto:liangli.0311@gmail.com" target="_top"><FontAwesomeIcon icon={ faEnvelope } /></a>
        </li>
        <li>
            <a href="#" onClick={() => $("#wechat_modal").modal()}  rel="noopener noreferrer"><FontAwesomeIcon icon={ faWeixin } /></a>
        </li>
    </ul>
);

export default SocialNetworkList;
