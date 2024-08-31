import React from "react";
import "../styles/events.css"

import TitleCardBackground from "../assets/events/eventVolleyball.png"

//event images
import BobaSocial from "../assets/events/fall-2024/GBM1-Fall-2024.png"
import MockInterview from "../assets/events/fall-2024/mock-interviews.png"

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
            <UpcomingPost
            image={MockInterview}
            eventDate="September 4th"
            postTitle="Mock Interview"
            postDesc="ejifajoiejfoiasejfoisejfodsjfoijsdafi yuh yuh yuh"
            />
            <div className="postContainer">
            <Post
            image={BobaSocial}
            eventDate="September 5th"
            postTitle="Boba Social"
            postDesc="🩵IT’S THAT TIME OF THE SEMESTER!!🩵Get ready for our first GBM of the fall semester: BOBA SOCIAL!🧋🧋🧋
            Bring your friends and come and see what we have ready for y’all this semester! There will be fun activities and drinks to go along 😉"
            />
            <Post
            image={BobaSocial}
            eventDate="September 5th"
            postTitle="Boba Social"
            postDesc="🩵IT’S THAT TIME OF THE SEMESTER!!🩵Get ready for our first GBM of the fall semester: BOBA SOCIAL!🧋🧋🧋
            Bring your friends and come and see what we have ready for y’all this semester! There will be fun activities and drinks to go along 😉"
            />
                        <Post
            image={BobaSocial}
            eventDate="September 5th"
            postTitle="Boba Social"
            postDesc="🩵IT’S THAT TIME OF THE SEMESTER!!🩵Get ready for our first GBM of the fall semester: BOBA SOCIAL!🧋🧋🧋
            Bring your friends and come and see what we have ready for y’all this semester! There will be fun activities and drinks to go along 😉"
            />
            
            </div>

        </div>
        </>
    )
}

export default Events;