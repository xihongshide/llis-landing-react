import React from 'react';
import $ from "jquery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faInstagram, faWeixin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

import gua from "../../index";

const SocialNetworkList = () => (
    <ul className="social-network-list">
        <li>
            <a href="https://github.com/xihongshide/MY.git" onClick={() => gua.logEvent("visit GitHub")} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } /></a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/leon-liang-li" onClick={() => gua.logEvent("visit LinkedIn")} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedinIn } /></a>
        </li>
        <li>
            <a href="https://www.instagram.com/l.liiiiii/" onClick={() => gua.logEvent("visit Ins")} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faInstagram } /></a>
        </li>
        <li>
            <a href="mailto:liangli.0311@gmail.com" onClick={() => gua.logEvent("contact email")} target="_top"><FontAwesomeIcon icon={ faEnvelope } /></a>
        </li>
        <li>
            <a href="#" onClick={() => {$("#wechat_modal").modal(); gua.logEvent("visit WeChat")}}  rel="noopener noreferrer"><FontAwesomeIcon icon={ faWeixin } /></a>
        </li>
    </ul>
);

export default SocialNetworkList;
