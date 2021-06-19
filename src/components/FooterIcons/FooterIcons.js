import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './FooterIcons.css'

const FooterIcons = () => {
    return (
        <div className="footer-icons">
           <p> <FontAwesomeIcon icon={faFacebook}  size="3x" border/></p>
            <p><FontAwesomeIcon icon={faBlog}  size="3x" border/></p>
            <p><FontAwesomeIcon icon={faYoutube}  size="3x" border/></p>
        </div>
    );
};

export default FooterIcons;