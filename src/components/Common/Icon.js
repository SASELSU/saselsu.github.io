import React from "react";
import "../CommonStyles/Icon.css"

import blackDiscord from "../../assets/icons/social_media_black/discord_black.png"
import blackFacebook from "../../assets/icons/social_media_black/facebook_black.png"
import blackInstagram from "../../assets/icons/social_media_black/instagram_black.png"

import whiteDiscord from "../../assets/icons/social_media_white/discord_white.png"
import whiteFacebook from "../../assets/icons/social_media_white/facebook_white.png"
import whiteInstagram from "../../assets/icons/social_media_white/instagram_white.png"

export const BlackDiscordIcon = () => {
    return (
        <div className="icon">
            <a href="https://discord.com/invite/eAW5RZsKyk" target="_blank">                
                <img src={blackDiscord}/>
            </a>
        </div>
    );
}

export const BlackFacebookIcon = () => {
    return (
        <div className="icon">
            <a href="https://www.facebook.com/lsu.sase/" target="_blank">                
                <img src={blackFacebook}/>
            </a>
        </div>
    );
}
export const BlackInstagramIcon = () => {
    return (
        <div className="icon">
            <a href="https://www.instagram.com/saselsu/" target="_blank">                
                <img src={blackInstagram}/>
            </a>
        </div>
    )
}

export const WhiteDiscordIcon = () => {
    return (
        <div className="icon">
            <a href="https://discord.com/invite/eAW5RZsKyk" target="_blank">                
                <img src={whiteDiscord}/>
            </a>
        </div>
    );
}

export const WhiteFacebookIcon = () => {
    return (
        <div className="icon">
            <a href="https://www.facebook.com/lsu.sase/" target="_blank">                
                <img src={whiteFacebook}/>
            </a>
        </div>
    );
}
export const WhiteInstagramIcon = () => {
    return (
        <div className="icon">
            <a href="https://www.instagram.com/saselsu/" target="_blank">                
                <img src={whiteInstagram}/>
            </a>
        </div>
    )
}