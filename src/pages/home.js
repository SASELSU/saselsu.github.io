import { 
    React, 
    useState,
    useEffect,
    useRef,
} from "react";
import "../styles/home.css";
import CommunityBackground1 from "../assets/home/home_backgrounds/community-background-1.png"
import DiversityBackground1 from "../assets/home/home_backgrounds/diversity-background-1.png"
import PDBackground1 from "../assets/home/home_backgrounds/pd-background-1.jpg"

import MiniCommunity from "../assets/home/miniCommunity.jpg"
import MiniDiversity from "../assets/home/miniDiversity.png"
import MiniProdev from "../assets/home/miniProDev.jpeg"


import Calendar from "../assets/home/calendars/November.png"

//sponsors
import Exxon from "../assets/home/sponsors/Exxon-Logo.png"
import Dow from "../assets/home/sponsors/Dow_Chemical_Company_logo.svg.png"
import Marathon from "../assets/home/sponsors/marathon.png"
import Shell from "../assets/home/sponsors/Shell_logo.svg.png"
import Chevron from "../assets/home/sponsors/Chevron.webp"

import SponsorshipPacket from "../assets/SASE@LSU Sponsorship.pdf"
import usePageTracking from "../components/Common/TrafficTracker";

// const communityBackgrounds = CommunityBackground1;
const backgrounds = [CommunityBackground1, DiversityBackground1, PDBackground1]
const delay = 5000; //carousel delay time

const Home = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const length = 3; //how many carousel slides there are

    const resetTimeout = () => { //carousel stuff dont worry about this
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => { // more carousel stuff dont worry about this
        resetTimeout();
        timeoutRef.current = setTimeout(() => 
            setIndex((prevIndex) => prevIndex === length - 1 ? 0 : prevIndex + 1),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);
    
    usePageTracking("Home Page");

    return (
        <> 
        <div className="home" //note: pillar container is the only thing in home and thats scuffed. change this later
        >
            <div className="pillarContainer" //homepage carousel
                style={{transform: `translate3d(${-index * 100}%, 0, 0)`
            }}>{[
                <div //DIVERSITY
                    className="pillar"
                    style={{backgroundImage: `url(${backgrounds[1]})`}}
                >
                    <div className="colorOverlay"/>

                    <div className="headerContainer" > 
                        <div className="pillarTitle">
                        RICH<br/> DIFFERENCES, <br/>COMMON GOALS.
                            </div>
                        {/* <div className="pillarDesc">
                            At SASE, we explore all kinds of different cultures. 
                        </div> */}
                    </div>
                </div>,

                <div //PROFESSIONAL DEVELOPMENT
                    className="pillar"
                    style={{backgroundImage: `url(${backgrounds[2]})`}}
                >
                    <div className="colorOverlay"/>

                    <div className="headerContainer" > 
                        ß<div className="pillarTitle">
                        SHAPING <br/> FUTURES <br/>TOGETHER.
                        </div>
                        {/* <div className="pillarDesc">
                            We develop 
                        </div> */}
                    </div>
                </div>,

                <div //COMMUNITY
                    className="pillar"
                    style={{backgroundImage: `url(${backgrounds[0]})`}}
                >
                    <div className="colorOverlay"/>

                    <div className="headerContainer" > 
                        <div className="pillarTitle">
                            just<br/> plain <br/>fun.
                        </div>
                        {/* <div className="pillarDesc">
                            <p>community</p>
                        </div> */}
                    </div>
                </div>
            ]}
            </div>
        </div>
        <div className ="missionStatement">
            {/* <h1>IMPORTANT LINK! DUE TOMORROW!</h1>
            <a href="https://forms.gle/278M7vs8iyMgYn5f7" target="_blank">
                REGISTER FOR SASE NATIONALS
            </a> */}
            <h2>Our Mission</h2>
            <h1>The Society of Asian Scientists & Engineers (SASE) aims to help scientists, engineers, and technologists reach their full career potential through professional development, cultural awareness, and giving back to their community.</h1>
            <br/>
            <h2>The Three Pillars of SASE</h2>
            <br/>
            <br/>
            <div className="missionPillarContainer">
                <div className="missionPillar">
                    <img src={MiniDiversity} alt="DiversityPillar"/>
                    <h2>Diversity</h2>
                    <p>Celebrate diversity on campuses and in the workplace.</p>
                </div>
                <div className="missionPillar">
                    <img src={MiniProdev} alt="ProfessionalDevPillar"/>
                    <h1>Professional Development</h1>
                    <p>Prepare Asian heritage scientists and engineers for success in the global business world.</p>
                </div>
                <div className="missionPillar">
                    <img src={MiniCommunity} alt="CommunityPillar"/>
                    <h2>Community</h2>
                    <p>Provide opportunites for members to make contributions to their local communities.</p>
                </div>
            </div>

        </div>
        <div className="calendar">
            <h1>EVENTS THIS MONTH</h1>
            <img src={Calendar} alt="calendar"/>
        </div>
        <div className="homeSponsors">
            <h1>THANK YOU TO OUR SPONSORS!</h1>
            <div className="homeSponsorList">
                <img src={Exxon} alt="Exxon"></img>
                <img src={Dow} alt="Dow"></img>
                <img src={Chevron} alt="Chevron"></img>
                <img src={Shell} alt="Shell"></img>
                <img src={Marathon} alt="Marathon"></img>
            </div>
            <p>
            Interested in becoming a partner with the LSU Society of Asian Scientists and Engineers (SASE)? <br/>Click the button below to download our sponsorship packet!
            </p>
            <a href={SponsorshipPacket} target="_blank" rel="noreferrer">
                Sponsorship Package
            </a>
        </div>
        </>
    )
}

export default Home;