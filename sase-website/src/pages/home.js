import { 
    React, 
    useState,
    useEffect,
    useRef,
} from "react";
import "../styles/home.css";
import CommunityBackground1 from "../assets/home/home_backgrounds/community-background-1.jpg"
import DiversityBackground1 from "../assets/home/home_backgrounds/diversity-background-1.png"
import PDBackground1 from "../assets/home/home_backgrounds/pd-background-1.jpg"

//sponsors
import Exxon from "../assets/home/sponsors/Exxon-Logo.png"
import Dow from "../assets/home/sponsors/Dow_Chemical_Company_logo.svg.png"
import Marathon from "../assets/home/sponsors/marathon.png"
import Shell from "../assets/home/sponsors/Shell_logo.svg.png"

const communityBackgrounds = CommunityBackground1;
const backgrounds = [CommunityBackground1, DiversityBackground1, PDBackground1]
const delay = 8000; //carousel delay time

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
                        <h1>RICH DIFFERENCES, <br/>COMMON GOALS</h1>
                        <p>diversity</p>
                    </div>
                </div>,

                <div //PROFESSIONAL DEVELOPMENT
                    className="pillar"
                    style={{backgroundImage: `url(${backgrounds[2]})`}}
                >
                    <div className="colorOverlay"/>

                    <div className="headerContainer" > 
                        <h1>SHAPING FUTURES <br/>TOGETHER</h1>
                        <p>professional development</p>
                    </div>
                </div>,

                <div //COMMUNITY
                    className="pillar"
                    style={{backgroundImage: `url(${backgrounds[0]})`}}
                >
                    <div className="colorOverlay"/>

                    <div className="headerContainer" > 
                        <h1>just plain <br/>fun.</h1>
                        <p>community</p>
                    </div>
                </div>
            ]}
            </div>
        </div>
        <div className ="missionStatement">
            <p>Our Mission</p>
            <h1>The Society of Asian Scientists & Engineers (SASE) aims to help scientists, engineers, and technologists reach their full career potential through professional development, cultural awareness, and giving back to their community.</h1>
        </div>
        <div className="calendar">
            <h1>EVENTS THIS MONTH</h1>
        </div>
        <div className="sponsors">
            <h1>THANK YOU TO OUR SPONSORS!</h1>
            <img src={Exxon}></img>
            <img src={Dow}></img>
            <img src={Shell}></img>
            <img src={Marathon}></img>
        </div>
        </>
    )
}

export default Home;