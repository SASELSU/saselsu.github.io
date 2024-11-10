import React from "react";
import "../styles/events.css"

import TitleCardBackground from "../assets/events/eventVolleyball.png"
// import FutureEvent from "../assets/events/futureEvent.png"

//event images
import CAA from "../assets/events/fall-2024/Companion Animal Alliance.png"
import GBM3 from "../assets/events/fall-2024/3rd_GBM_1.png"
import GeauxHack from "../assets/events/fall-2024/geauxhack.png"
import GeauxHackWork1 from "../assets/events/fall-2024/geauxhackWork1.png"

//helpers
import {
    Post,
    // UpcomingPost,
} from "./helpers/eventsHelpers"
import usePageTracking from "../components/Common/TrafficTracker";

const Events = () => {
    usePageTracking("Events Page");

    return (
        <>
        <div className="eventTitleCard"
            style={{backgroundImage: `url(${TitleCardBackground})`}}
        >
            <div className="eventColorOverlay"/>
            <h1>EVENTS</h1>
        </div>
        <div className="eventPostList">
            <h1>What's Next?</h1> 
            <h3>Read about our future events!</h3>

            <div className="postContainer"> {/*something something more manual input*/}
                <Post
                    image={GBM3}
                    eventMonth="NOV 2024"
                    eventDay="14"
                    eventTime="6:00pm-7:30pm"
                    eventLocation="PFT 1202"
                    postTitle="Third General Body Meeting"
                    postDesc="Join us at our Despicable Me themed Third General Body Meeting as we aim to steal the moon ‼️ ‼️ Come dressed as a minion and serve the most evil man on Earth, Faris Gruttak‼"
                />

                {/* <Post //never remove (this is the future event)
                image={FutureEvent}
                eventMonth="Some Month!"
                eventDay="xx"
                eventTime="Eventually!"
                eventLocation="Some Location!"
                postTitle="Future Event"
                postDesc="Our officers are currently formulating a new event! Either that or you're reading this page during the summer. Check back soon! "
                /> */}
                {/* uncomment above if theres no events */}
            </div>
            {/* <Post
                    image={ExxonMock}
                    eventMonth="SEPT 2024"
                    eventDay="10"
                    eventTime="6:00pm-7:30pm"
                    eventLocation="PFT 1200"
                    postTitle="Exxon Mock Interviews"
                    postDesc="🗣️ Get some final practice with your professional skills before the Career Fair! Feel free to also bring your resumes for a fresh set of eyes 👀 📎 "
                /> */}
            {/* <div className="postContainer">

            </div> */}
        </div>
        </>
    )
}

export default Events;