import React from "react";
import "../styles/events.css"

import TitleCardBackground from "../assets/events/eventVolleyball.png"
import FutureEvent from "../assets/events/futureEvent.png"

//event images
import BobaSocial from "../assets/events/fall-2024/GBM1-Fall-2024.png"
// import MockInterview from "../assets/events/fall-2024/mock-interviews.png"
import Pickleball from "../assets/events/fall-2024/24Pickleball.png"
import BloodDrive from "../assets/events/fall-2024/24BloodDrive.png"
import ExxonMock from "../assets/events/fall-2024/exxonMock.jpg"
import ExxonPlant from "../assets/events/fall-2024/exxonPlant.png"
//helpers
import {
    Post,
    UpcomingPost,
} from "./helpers/eventsHelpers"

const Events = () => {
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
                    image={ExxonMock}
                    eventMonth="SEPT 2024"
                    eventDay="10"
                    eventTime="6:00pm-7:30pm"
                    eventLocation="PFT 1200"
                    postTitle="Exxon Mock Interviews"
                    postDesc="🗣️ Get some final practice with your professional skills before the Career Fair! Feel free to also bring your resumes for a fresh set of eyes 👀 📎 "
                />
                <Post
                    image={Pickleball}
                    eventMonth="SEPT 2024"
                    eventDay="19"
                    eventTime="6:15pm-8:15pm"
                    eventLocation="Stacks Pickleball"
                    postTitle="Pickleball x DOW"
                    postDesc="We are partnered with DOW to provide y'all a free night of Pickleball! Come to Stacks Pickleball (Stage 4) and join us for food, fun, and networking!"
                />
                <Post
                    image={ExxonPlant}
                    eventMonth="SEPT 2024"
                    eventDay="20"
                    eventTime="9:30am-12:00pm"
                    eventLocation="4045 Scenic Hwy"
                    postTitle="Exxon Plant Tour"
                    postDesc="ENGINEERS ONLY. Come visit Exxon's plant! It is on a first come, first serve basis so sign up fast!"
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
            <div className="postContainer">
            <Post
                    image={BloodDrive}
                    eventMonth="SEPT 2024"
                    eventDay="26"
                    eventTime="9:00am-4:00pm"
                    eventLocation="LSU Union 310"
                    postTitle="Blood Drive"
                    postDesc="Come to the Student Union to donate your blood! Donors will be given a free FIGHT CANCER shirt! Sign up with the QR code."
                />
            </div>

        </div>
        </>
    )
}

export default Events;