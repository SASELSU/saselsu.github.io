import { 
    React, 
    useState,
    useEffect,
    useRef,
} from "react";
import "../styles/Home.css";
import CommunityBackground1 from "../assets/home_backgrounds/community-background-1.jpg"
import DiversityBackground1 from "../assets/home_backgrounds/diversity-background-1.png"
import PDBackground1 from "../assets/home_backgrounds/pd-background-1.jpg"

const communityBackgrounds = CommunityBackground1;
const backgrounds = [CommunityBackground1, DiversityBackground1, PDBackground1]
const delay = 8000;

const Home = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const length = 3;

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => 
            setIndex((prevIndex) => prevIndex === length - 1 ? 0 : prevIndex + 1),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <>
        <div className="home">
            <div 
                className="pillarContainer"
                style={{transform: `translate3d(${-index * 100}%, 0, 0)`
            }}>{[
                <div 
                    className="pillar"
                    key={"0"}
                    style={{backgroundImage: `url(${backgrounds[1]})`}}
                >
                    <div className="colorOverlay"/>

                    <div className="headerContainer" > 
                        <h1>Diversity</h1>
                        <p>text, text and yeah more text</p>
                    </div>
                </div>,
                <div 
                    className="pillar"
                    key={"0"}
                    style={{backgroundImage: `url(${backgrounds[2]})`}}
                >
                    <div className="colorOverlay"/>

                    <div className="headerContainer" > 
                        <h1>Professional Development</h1>
                        <p>text, text and yeah more text</p>
                    </div>
                </div>,

                <div 
                    className="pillar"
                    key={"2"}
                    style={{backgroundImage: `url(${backgrounds[0]})`}}
                >
                    <div className="colorOverlay"/>

                    <div className="headerContainer" > 
                        <h1>Community</h1>
                        <p>text, text and yeah more text</p>
                    </div>
                </div>
            ]}
            </div>
        </div>
        <div className ="missionStatement">
            <p>Our Mission</p>
            <h1>The Society of Asian Scientists & Engineers (SASE) aims to help scientists, engineers, and technologists reach their full career potential through professional development, cultural awareness, and giving back to their community.</h1>
        </div>
        </>
    )
}

export default Home;