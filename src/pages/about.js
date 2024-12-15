import {
    React,
    // useState
} from "react";
import "../styles/about.css"

import { HistoryCard,EBoardCard } from "./helpers/aboutHelpers";

import TitleCardBackground from "../assets/about/title_card.jpg"

import OurMission from "../assets/about/our-mission-temp.jpeg"

//history pics
import FirstMeeting from "../assets/about/history/firstSASE.jpeg"
import ZoomCall from "../assets/about/history/zoomSASE.jpeg"
import ReturnSASE from "../assets/about/history/returnSASE.jpeg"
import uhhhName from "../assets/about/history/historyReturn.jpeg"
import FirstPaint from "../assets/about/history/firstPaint.png"
import LunarMeeting from "../assets/about/history/historyLunarEvent.jpeg"
import ReallyBigGathering from "../assets/about/history/bobaSocial23.jpg"

//eboard pics
import PresidentPic from "../assets/about/eboard/faris_khattak.png"
import VicePresidentPic from "../assets/about/eboard/grishma_shrestha.png"
import SecretaryPic from "../assets/about/eboard/jennie_tran.png"
import TreasurerPic from "../assets/about/eboard/galvin_wong.png"
import PublicRelationsPic from "../assets/about/eboard/camila_cuadra.png"
import HistorianPic from "../assets/about/eboard/kim_nguyen.png"
import GraphicDesignPic from "../assets/about/eboard/kris_lam.png"
import WebmasterPic from "../assets/about/eboard/ricky_liang.png"
import FundraisingPic from "../assets/about/eboard/winson_liu.png"
import OutreachPic from "../assets/about/eboard/himangini_chauhan.png"
import ProDevPic from "../assets/about/eboard/thanh_kirsch.png"
import usePageTracking from "../components/Common/TrafficTracker";



const About = () => {
    usePageTracking("About Page");    
    // const scrollRef = useHorizontalScroll();
    // const [index, setIndex] = React.useState;
    return (
        <>
        <div 
            className="aboutTitleCard"
            style={{backgroundImage: `url(${TitleCardBackground})`}}
        >
            <div className="aboutColorOverlay"/>
            <h1>ABOUT US</h1>
        </div>
        <div className="aboutMission">
                <h1>Our Mission</h1>
                <p>SASE is dedicated to the advancement of Asian heritage scientists and engineers in education and employment so that they can achieve their full career potential. In addition to professional development, SASE also encourages members to contribute to the enhancement of the communities in which they live.</p>
                <img src={OurMission} alt="missionImage"/>
                
                <p>SASE’s mission is to:

Prepare Asian heritage scientists and engineers for success in the global business world.
Celebrate diversity on campuses and in the workplace.
Provide opportunities for members to make contributions to their local communities.</p>
                <p><b></b></p>
        </div>
        <div className="aboutHistory">
            <h1>OUR HISTORY</h1>
            <div className="historyCardSlider">
                <div className="historyCardContainer"
                // style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}
                > {/*ref={scrollRef} */}
                    <HistoryCard 
                    image={FirstMeeting}
                    cardBlurb="SASE LSU emerged in February 2019, initially comprising a modest group of 25 active members."/>
                    
                    <HistoryCard
                    image={ZoomCall}
                    cardBlurb="However, the unforeseen impact of COVID-19 created a disconnect between the LSU community and its students. Alongside the challenges of virtual interactions and the concerning rise in AAPI violence nationwide, students within the LSU community felt increasingly isolated."/>
                    
                    <HistoryCard
                    image={ReturnSASE}
                    cardBlurb="Nevertheless, SASE LSU preserved, dedicating its efforts into engaging faculty, organizing interactive events, and highlighting accomplishments of current students and faculties. These endeavors aimed to generate awareness and initiate discussions centered around empowerment and community."/>
                    
                    <HistoryCard
                    image={uhhhName}
                    cardBlurb="As Fall 2021 approached, SASE LSU gained momentum by prioritizing the development of a tightly-knit community. With the gradual decline of restrictions, we successfully brought students together after a prolonged period of isolation."/>
                    
                    <HistoryCard
                    image={FirstPaint}
                    cardBlurb="We organized events such as boba and paint socials, volunteering events with organizations like Cat Haven and Habitat for Humanity, and giveback nights at local Asian businesses. These initiatives fostered a safe environment and bolstered our presence within the LSU and Baton Rouge community."/>
                    
                    <HistoryCard
                    image={LunarMeeting}
                    cardBlurb="Through persistent dedication throughout the semester, our membership skyrocketed from the initial 25 to a remarkable 133 active participants by the spring of 2022. We remained steadfast in our commitment to enhancing visibility and nurturing a sense of community. Our Lunar New Year meeting exemplified the celebration of diversity, acting as a testament to our growth. "/>
                    
                    <HistoryCard
                    image={ReallyBigGathering}
                    cardBlurb="As we expanded, we incorporated workshops and invited guest speakers to enable our members to pursue professional development. SASE LSU serves as a space where individuals can embrace their diversity against all odds, forge their own community within LSU, and, above all, to love purple and live gold."/>
                </div>    
            </div>
        
        </div>
        </>
    )
}

export default About;