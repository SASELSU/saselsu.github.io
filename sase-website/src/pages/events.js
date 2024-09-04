import React from "react";
import "../styles/events.css"

import TitleCardBackground from "../assets/events/eventVolleyball.png"
import FutureEvent from "../assets/events/futureEvent.png"

//event images
import BobaSocial from "../assets/events/fall-2024/GBM1-Fall-2024.png"
import MockInterview from "../assets/events/fall-2024/mock-interviews.png"
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
            <h1>events</h1>
        </div>
        <div className="eventPostList">
            <h1>Upcoming Events</h1> 
            <UpcomingPost //note that you, future webmaster, will have the manually do this for now
                image={MockInterview}
                eventDate="September 4th"
                postTitle="Mock Interview"
                postDesc="ejifajoiejfoiasejfoisejfodsjfoijsdafi yuh yuh yuh"
            />
            <div className="postContainer">
            <Post //something something more manual input
                image={BobaSocial}
                eventDate="September 5th"
                postTitle="Boba Social"
                postDesc="🩵IT’S THAT TIME OF THE SEMESTER!!🩵Get ready for our first GBM of the fall semester: BOBA SOCIAL!🧋🧋🧋
            Bring your friends and come and see what we have ready for y’all this semester! There will be fun activities and drinks to go along 😉"
            />
                <Post
                    image={BloodDrive}
                    eventDate="September 26th"
                    postTitle="Blood Drive"
                    postDesc="Come to the Student Union to donate your blood! Donors will be given a free FIGHT CANCER shirt! Sign up with the QR code."
                />
                <Post //never remove (this is the future event)
                image={FutureEvent}
                eventDate="Some Day"
                postTitle="Future Event"
                postDesc="Our officers are currently formulating a new event! Either that or it's the summer right now. Check back soon! "
                />
            </div>

        </div>
        </>
    )
}

export default Events;