import React from "react";
import "../styles/about.css"

import TitleCardBackground from "../assets/about/title_card.jpg"
// import PresidentPic from "../assets/about/eboard"
// import VicePresidentPic from "../assets/about/eboard"
// import SecretaryPic from "../assets/about/eboard"
// import TreasurerPic from "../assets/about/eboard"
// import PresidentPic from "../assets/about/eboard"
import OurMission from "../assets/about/our-mission-temp.jpeg"

const About = () => {
    return (
        <>
        <div 
            className="aboutTitleCard"
            style={{backgroundImage: `url(${TitleCardBackground})`}}
        >
            <div className="aboutColorOverlay"/>
            <h1>about us</h1>
        </div>
        <div className="aboutMission">
            <div className="aboutMissionText">
                <h1>OUR MISSION</h1>
                <p>SASE is dedicated to the advancement of Asian heritage scientists and engineers in education and employment so that they can achieve their full career potential. In addition to professional development, SASE also encourages members to contribute to the enhancement of the communities in which they live.</p>
                <p>SASE’s mission is to:

Prepare Asian heritage scientists and engineers for success in the global business world.
Celebrate diversity on campuses and in the workplace.
Provide opportunities for members to make contributions to their local communities.</p>
                <p>SASE membership is open to people of all ethnic backgrounds.</p>
            </div>

            <img src={OurMission}/>
        </div>
        <div className="aboutHistory">
            <h1>OUR HISTORY</h1>
            <p>SASE LSU emerged in February 2019, initially comprising a modest group of 25 active members. However, the unforeseen impact of COVID-19 created a disconnect between the LSU community and its students. Alongside the challenges of virtual interactions and the concerning rise in AAPI violence nationwide, students within the LSU community felt increasingly isolated. Nevertheless, SASE LSU preserved, dedicating its efforts into engaging faculty, organizing interactive events, and highlighting accomplishments of current students and faculties. These endeavors aimed to generate awareness and initiate discussions centered around empowerment and community.

As Fall 2021 approached, SASE LSU gained momentum by prioritizing the development of a tightly-knit community. With the gradual decline of restrictions, we successfully brought students together after a prolonged period of isolation. We organized events such as boba and paint socials, volunteering events with organizations like Cat Haven and Habitat for Humanity, and giveback nights at local Asian businesses. These initiatives fostered a safe environment and bolstered our presence within the LSU and Baton Rouge community.

Through persistent dedication throughout the semester, our membership skyrocketed from the initial 25 to a remarkable 133 active participants by the spring of 2022. We remained steadfast in our commitment to enhancing visibility and nurturing a sense of community. Our Lunar New Year meeting exemplified the celebration of diversity, acting as a testament to our growth. As we expanded, we incorporated workshops and invited guest speakers to enable our members to pursue professional development. SASE LSU serves as a space where individuals can embrace their diversity against all odds, forge their own community within LSU, and, above all, to love purple and live gold.</p>
        </div>
        <div className="aboutEBoard">

        </div>
        </>
    )
}

export default About;