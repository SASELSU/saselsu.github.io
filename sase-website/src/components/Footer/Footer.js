import React from "react";
import "./Footer.css"
import discord from "../../assets/icons/social_media/discord.png"
import facebook from "../../assets/icons/social_media/facebook.png"
import instagram from "../../assets/icons/social_media/instagram.png"
import facebookHover from "../../assets/icons/social_media/facebook-hover.png"
import instagramHover from "../../assets/icons/social_media/instagram-hover.png"

const Icon = (props) => {
    const {
        image,
        link,
    } = props;

    return (
        <div className="icon">
            <a href={link} target="_blank">                
                <img src={image}/>
            </a>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Icon 
                    image={discord}
                    link="https://discord.com/invite/eAW5RZsKyk"
                />
                <Icon 
                    image={facebook}
                    link="https://www.facebook.com/lsu.sase/"
                />
                <Icon 
                    image={instagram}
                    link="https://www.instagram.com/saselsu/"
                />
            </div>
            <p>test</p>
        </div>
    )
}

export default Footer;