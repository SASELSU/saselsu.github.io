import React from "react";
import "../styles/events.css"

import TitleCardBackground from "../assets/events/eventVolleyball.png"
// import FutureEvent from "../assets/events/futureEvent.png"

//event images
import FutureEvent from "../assets/events/futureEvent.png"
import FoodBank from "../assets/events/spring-2025/Food Bank Volunteering.png"
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
            <Post
                image={MainEvent}
                eventMonth="FEB"
                eventDay="1 - 23"
                eventTime=""
                eventLocation="Main Event"
                postTitle="Main Event Giveback"
                postDesc="Interested in going to Main Event? Give back half of the cost to SASE by purchasing through https://grouprai.se/mainevent54621s!"
                />                
                <Post
                image={FoodBank}
                eventMonth="FEB"
                eventDay="8"
                eventTime="8:00 AM - 12:00 PM"
                eventLocation="10600 S Choctaw Dr"
                postTitle="Food Bank Volunteering"
                postDesc="Come help out your local food bank by providing your assistance! Dress in closed toe shoes and loose comfy clothes!"
                />                
                <Post
                image={LiveDare}
                eventMonth="FEB"
                eventDay="8"
                eventTime="8:00 PM - 10:00 PM"
                eventLocation="@saselsu Insta Page"
                postTitle="SASE: Dare Live"
                postDesc="Want to force your favorite EBoard officer to do your bidding? Come join us on our Instagram live and throw money at us for funny screen recordings!"
                />
                </div>
                <div className="postContainer"> {/*something something more manual input*/}              
                <Post
                image={SecretValentine}
                eventMonth="FEB"
                eventDay="3 - 11"
                eventTime=""
                eventLocation="Scan QR"
                postTitle="Secret Valentine"
                postDesc="Share some love and sweetness with SASE! Scan the QR code for more info!"
                />
                {/* <Post //never remove (this is the future event)
                image={FutureEvent}
                eventMonth="Some Month!"
                eventDay="xx"
                eventTime="Eventually!"
                eventLocation="Some Location!"
                postTitle="Future Event"
                postDesc="Our officers are currently formulating a new event! Either that or you're reading this page during the summer or winter. Check back soon! "
                /> */}
                {/* uncomment above if theres no events */}
            </div>
        </div>
        </>
    )
}

export default Events;