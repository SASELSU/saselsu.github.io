import {
    useState,
    useEffect,
    useRef
} from "react";

import usePageTracking from "../components/Common/TrafficTracker";

// Carousel Backgrounds
import CarouselBG1 from "../assets/home/home_backgrounds/diversity-background-1.png";
import CarouselBG2 from "../assets/home/home_backgrounds/pd-background-1.png";
import CarouselBG3 from "../assets/home/home_backgrounds/community-background-1.png";

// Card Backgrounds
import MiniCommunity from "../assets/home/miniCommunity.jpg";
import MiniDiversity from "../assets/home/miniDiversity.png";
import MiniProdev from "../assets/home/miniProDev.jpeg";

// Sponsors
import Exxon from "../assets/home/sponsors/Exxon-Logo.png";
import Dow from "../assets/home/sponsors/Dow_Chemical_Company_logo.svg.png";
import Marathon from "../assets/home/sponsors/marathon.png";
import Shell from "../assets/home/sponsors/Shell_logo.svg.png";
import Chevron from "../assets/home/sponsors/Chevron.webp";

import Calendar from "../assets/home/calendars/SASE_Calendar_2025-2026.png";
import SponsorshipPacket from "../assets/SASE@LSU Sponsorship.pdf";

import "../styles/home.css";

export default function Home () {
    /**
     * Carousel Implementation
     */
    const backgrounds = [
        CarouselBG1,
        CarouselBG2,
        CarouselBG3
    ];

    const delay = 5e3;

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const resetTimeout = (): void => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        // "dont worry about this" - Ricky Liang, 2024
        resetTimeout();
        timeoutRef.current = setTimeout(() => setIndex(i => (i + 1) % backgrounds.length), delay);

        return () => {
            resetTimeout();
        };
    }, [index, backgrounds.length]);

    usePageTracking("Home");

    /**
     * The actual homepage.
     */
    return (
        <>
            <div className="home">
                {/* Note: Pillar container is the only thing in home and that's scuffed. Change this later. */}
                {/* Homepage carousel. The kind of thing that would usually go in it's own component... */}
                <div className="pillarContainer" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    <div className="pillar" style={{ backgroundImage: `url(${backgrounds[0]})` }}>
                        <div className="colorOverlay"></div>
                        <div className="headerContainer">
                            <div className="pillarTitle" style={{ textTransform: "uppercase" }}>
                                Rich
                                <br />
                                Differences,
                                <br />
                                Common Goals.
                            </div>
                            {/* <div className="pillarDesc">
                                At SASE, we explore all kinds of different cultures.
                            </div> */}
                        </div>
                    </div>
                    <div className="pillar" style={{ backgroundImage: `url(${backgrounds[1]})` }}>
                        <div className="colorOverlay"></div>
                        <div className="headerContainer">
                            <div className="pillarTitle" style={{ textTransform: "uppercase" }}>
                                Shaping
                                <br />
                                Futures
                                <br />
                                Together
                            </div>
                            {/* <div className="pillarDesc">
                                We develop
                            </div> */}
                        </div>
                    </div>
                    <div className="pillar" style={{ backgroundImage: `url(${backgrounds[2]})` }}>
                        <div className="colorOverlay"></div>
                        <div className="headerContainer">
                            <div className="pillarTitle" style={{ textTransform: "uppercase" }}>
                                just
                                <br />
                                plain
                                <br />
                                fun
                            </div>
                            {/* <div className="pillarDesc">
                                community
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="missionStatement">
                {/* <h1>IMPORTANT LINK! DUE TOMORROW!</h1>
                <a href="https://forms.gle/278M7vs8iyMgYn5f7" target="_blank">
                    REGISTER FOR SASE NATIONALS
                </a> */}
                <h2>Our Mission</h2>
                <h1>The Society of Asian Scientists & Engineers at LSU aims to help scientists, engineers, and technologists reach their full career potential through professional development, cultural awareness, and giving back to their community.</h1>
                <br />
                <h2>The Three Pillars of SASE</h2>
                <div className="missionPillarContainer">
                    <div
                        className="missionPillar"
                        style={{ backgroundImage: `url(${MiniDiversity})` }}
                    >
                        <div className="colorOverlay" />
                        <p>Celebrate intercultural exchange on campuses and in the workplace.</p>
                        <h1>Intercultural Exchange</h1>
                    </div>
                    <div
                        className="missionPillar"
                        style={{ backgroundImage: `url(${MiniProdev})` }}
                    >
                        <div className="colorOverlay" />
                        <h1>Professional Development</h1>
                        <p>Prepare Asian heritage scientists and engineers for success in the global business world.</p>
                    </div>
                    <div
                        className="missionPillar"
                        style={{ backgroundImage: `url(${MiniCommunity})` }}
                    >
                        <div className="colorOverlay" />
                        <h1>Community</h1>
                        <p>Provide opportunites for members to make contributions to their local communities.</p>
                    </div>
                </div>
            </div>
            <div className="calendar">
                <h1>EVENTS THIS MONTH</h1>
                <img src={Calendar} alt="calendar" />
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
                    Interested in becoming a partner with the LSU Society of Asian Scientists and Engineers (SASE)? <br />Click the button below to download our sponsorship packet!
                </p>
                <a href={SponsorshipPacket} target="_blank" rel="noreferrer">
                    Sponsorship Package
                </a>
            </div>
        </>
    );
};
