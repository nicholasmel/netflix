import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className='footer__container'>
            <div className="footer__icons" href="www.google.com">
                <i className="fab fa-facebook-square fa-2x"></i>
                <i className="fab fa-instagram fa-2x"></i>
                <i className="fab fa-twitter fa-2x"></i>
                <i className="fab fa-youtube fa-2x"></i>
            </div>
        </div>
    )
}

export default Footer
