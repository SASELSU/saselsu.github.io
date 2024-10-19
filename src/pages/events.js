import React from "react";
import "../styles/events.css"

import TitleCardBackground from "../assets/events/eventVolleyball.png"
// import FutureEvent from "../assets/events/futureEvent.png"

//event images
import CAA from "../assets/events/fall-2024/Companion Animal Alliance.png"
import GBM2 from "../assets/events/fall-2024/gbm2-fall-2024.png"
import GeauxHack from "../assets/events/fall-2024/geauxhack.png"
import GeauxHackWork1 from "../assets/events/fall-2024/geauxhackWork1.png"

//helpers
import {
    Post,
    // UpcomingPost,
} from "./helpers/eventsHelpers"
import usePageTracking from "../components/Common/TrafficTracker";

const Events = () => {
    usePageTracking();

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
                    image={GBM2}
                    eventMonth="OCT 2024"
                    eventDay="24"
                    eventTime="6:00pm-7:30pm"
                    eventLocation="PFT 1200"
                    postTitle="Second General Body Meeting"
                    postDesc="THE ONE PIECE IS REAL!!! Come to our second general body meeting where we'll have an Asian trick or treat as well as a costume contest! (Winner gets a prize)"
                />
                <Post
                    image={GeauxHackWork1}
                    eventMonth="OCT 2024"
                    eventDay="23"
                    eventTime="6pm-7:30pm"
                    eventLocation="PFT 1202"
                    postTitle="GeauxHack Workshop 1: Intro to Hackathon"
                    postDesc="Are you a first time Hackathoner? Or perhaps you want to brush up on the basics. REGARDLESS! In this workshop, we'll be going over what to expect and how to approach your first Hackathon! (also a QnA session)"
                />
                <Post
                    image={GeauxHack}
                    eventMonth="NOV 2024"
                    eventDay="1 - 3"
                    // eventTime="11:00am-8:00pm"
                    eventLocation="Patrick F Taylor"
                    postTitle="GeauxHack"
                    postDesc="OUR THIRD ANNUAL HACKATHON! This year's theme will be World Tourism, so come along as we Geaux arund the globe! More details on the website page."
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
            <div className="postContainer">
            <Post
                    image={CAA}
                    eventMonth="Nov 2024"
                    eventDay="5"
                    eventTime="3:00pm-6:00pm"
                    eventLocation="2550 Gourrier Ave"
                    postTitle="Companion Animal Alliance"
                    postDesc="mmm animal volunteering animal volunteering"
                />
            </div>
        </div>
        </>
    )
}

export default Events;