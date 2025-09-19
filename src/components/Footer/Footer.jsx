import React from "react";
import "./Footer.css"
import {
    WhiteDiscordIcon,
    WhiteInstagramIcon,
    WhiteFacebookIcon
}
from "../Common/Icon.jsx";

const Footer = () => {
    return (
        <div className="footer">
            <p>Contact Us!</p>
            <a href="mailto:lsu@saseconnect.org">lsu@saseconnect.org</a>

            <div className="socialMedia">
                <div className="innerSocialMedia"><WhiteDiscordIcon/></div>
                <div className="innerSocialMedia"><WhiteFacebookIcon/></div>
                <div className="innerSocialMedia"><WhiteInstagramIcon/></div>
            </div>

        </div>
    )
}

export default Footer;