import React from "react";
import "../styles/events.css"

import TitleCardBackground from "../assets/events/eventVolleyball.png"
// import FutureEvent from "../assets/events/futureEvent.png"

//event images
import FutureEvent from "../assets/events/futureEvent.png"
import Gambling from "../assets/events/spring-2025/Gambling.png"
import LiveDare from "../assets/events/spring-2025/Instagram live Dares.png"
import MainEvent from "../assets/events/spring-2025/Main Event Fun Cards Supporting.png"
import SecretValentine from "../assets/events/spring-2025/secret valentine flyer.png"


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
            {/* <Post
                image={Gambling}
                eventMonth="MAR"
                eventDay="19"
                eventTime="6:00 - 7:30 PM"
                eventLocation="PFT 1245"
                postTitle="SASE CHIPFEST"
                postDesc="Want to ██████? Come to PFT 1245 and have a fun time with us! Games here: https://shorturl.at/qbDM4."
                />                 */}
                </div>
                <div className="postContainer"> {/*something something more manual input*/}              
                <Post //never remove (this is the future event)
                image={FutureEvent}
                eventMonth="Some Month!"
                eventDay="xx"
                eventTime="Eventually!"
                eventLocation="Some Location!"
                postTitle="Future Event"
                postDesc="Our officers are currently formulating a new event! Either that or you're reading this page during the summer or winter. Check back soon! "
                />
                {/* uncomment above if theres no events */}
            </div>
        </div>
        </>
    )
}

export default Events;