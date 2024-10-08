import React from "react";
import "./Footer.css"
import {
    WhiteDiscordIcon,
    WhiteInstagramIcon,
    WhiteFacebookIcon
}
from "../Common/Icon.js";

const Footer = () => {
    return (
        <div className="footer">
            <p>Contact Us!</p>
            <p>lsu@saseconnect.org</p>

            <div className="socialMedia">
                <WhiteDiscordIcon/>
                <WhiteFacebookIcon/>
                <WhiteInstagramIcon/>
            </div>

        </div>
    )
}

export default Footer;