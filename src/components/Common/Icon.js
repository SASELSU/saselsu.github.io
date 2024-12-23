import React from "react";
import "../CommonStyles/Icon.css"

import blackDiscord from "../../assets/icons/social_media_black/discord_black.png"
import blackFacebook from "../../assets/icons/social_media_black/facebook_black.png"
import blackInstagram from "../../assets/icons/social_media_black/instagram_black.png"

import whiteDiscord from "../../assets/icons/social_media_white/discord_white.png"
import whiteFacebook from "../../assets/icons/social_media_white/facebook_white.png"
import whiteInstagram from "../../assets/icons/social_media_white/instagram_white.png"

import colorLinkedin from "../../assets/icons/social_media_color/linkedin_color.png"

export const BlackDiscordIcon = () => {
    return (
        <div className="icon">
            <a href="https://discord.com/invite/eAW5RZsKyk" target="_blank" rel="noreferrer">                
                <img src={blackDiscord} alt="discord"/>
            </a>
        </div>
    );
}

export const BlackFacebookIcon = () => {
    return (
        <div className="icon">
            <a href="https://www.facebook.com/lsu.sase/" target="_blank" rel="noreferrer">                
                <img src={blackFacebook} alt="facebook"/>
            </a>
        </div>
    );
}
export const BlackInstagramIcon = () => {
    return (
        <div className="icon">
            <a href="https://www.instagram.com/saselsu/" target="_blank" rel="noreferrer">                
                <img src={blackInstagram} alt="instagram"/>
            </a>
        </div>
    )
}

export const WhiteDiscordIcon = () => {
    return (
        <div className="icon">
            <a href="https://discord.com/invite/eAW5RZsKyk" target="_blank" rel="noreferrer">                
                <img src={whiteDiscord} alt="discord"/>
            </a>
        </div>
    );
}

export const WhiteFacebookIcon = () => {
    return (
        <div className="icon">
            <a href="https://www.facebook.com/lsu.sase/" target="_blank" rel="noreferrer">                
                <img src={whiteFacebook} alt="facebook"/>
            </a>
        </div>
    );
}
export const WhiteInstagramIcon = () => {
    return (
        <div className="icon">
            <a href="https://www.instagram.com/saselsu/" target="_blank" rel="noreferrer">                
                <img src={whiteInstagram} alt="instagram"/>
            </a>
        </div>
    )
}

export const ColorLinkedinIcon = (props) => {
    const {link} = props;
    return (
        <div className="icon">
            <a href={link} target="_blank" rel="noreferrer">                
                <img src={colorLinkedin} alt="linkedin"/>
            </a>
        </div>
    )
}