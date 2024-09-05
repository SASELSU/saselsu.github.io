import React from "react";
import "../styles/events.css"

import TitleCardBackground from "../assets/events/eventVolleyball.png"
import FutureEvent from "../assets/events/futureEvent.png"

//event images
import BobaSocial from "../assets/events/fall-2024/GBM1-Fall-2024.png"
// import MockInterview from "../assets/events/fall-2024/mock-interviews.png"
import Pickleball from "../assets/events/fall-2024/24Pickleball.png"
import BloodDrive from "../assets/events/fall-2024/24BloodDrive.png"

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
                    image={BobaSocial}
                    eventMonth="SEPT 2024"
                    eventDay="5"
                    eventTime="6:30pm-8:00pm"
                    eventLocation="PFT 1100"
                    postTitle="GBM 1: Boba Social"
                    postDesc="IT’S THAT TIME OF THE SEMESTER! Get ready for our first GBM of the fall semester: BOBA SOCIAL!🧋
                Bring your friends and come and see what we have ready for y’all this semester! There will be fun activities and drinks to go along! 😉"
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
                    image={BloodDrive}
                    eventMonth="SEPT 2024"
                    eventDay="26"
                    eventTime="9:00am-4:00pm"
                    eventLocation="LSU Union 310"
                    postTitle="Blood Drive"
                    postDesc="Come to the Student Union to donate your blood! Donors will be given a free FIGHT CANCER shirt! Sign up with the QR code."
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

        </div>
        </>
    )
}

export default Events;