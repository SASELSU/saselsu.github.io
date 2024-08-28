import React from "react";
import "../styles/About.css"
import TitleCardBackground from "../assets/about_us/title_card.jpg"
const About = () => {
    return (
        <div 
            className="titleCard"
            style={{backgroundImage: `url(${TitleCardBackground})`}}
        >
            <h1>about us</h1>
        </div>
    )
}

export default About;