import React from "react";
import icon from "../../assets/github.svg";
import iconLinkedin from "../../assets/linkedin.svg";
import iconmail from "../../assets/mail.svg";
import './Footer.css';

const Footer = () => {
    return (
        <div id='Footer' className="footer">
            <div className="footericon">
        
        <a href="https://github.com/MarahZE">
          <img src={icon} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/marah-zeibak">
          <img src={iconLinkedin} alt="" />
        </a>
        <a href="mailto:zeibakmarah@gmail.com">
        <img src={iconmail} alt="" />
        </a>
      </div>
            <hr />
            <div className="footer-bottom">
                <p>© 2024 All rights reserved. Designed by Marah Zeibak.  </p>
            </div>
        </div>
    )
}

export default Footer;