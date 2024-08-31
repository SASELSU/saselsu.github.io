import React from "react";
import "../styles/events.css"

import TitleCardBackground from "../assets/events/eventVolleyball.png"
import BobaSocial from "../assets/events/fall-2024/GBM1-Fall-2024.png"

const Post = (props) => {
    const {
        image,
        eventDate,
        postTitle,
        postDesc,
    } = props;
    return (
        <div className="eventPost">
            <img src={image}/>
            <div className="eventPostInfo">
                <h1>{postTitle}</h1>
                <h1>{eventDate}</h1>
                <p>{postDesc}</p>
            </div>
        </div>
    );
}

const Events = () => {
    return (
        <>
        <div 
            className="eventTitleCard"
            style={{backgroundImage: `url(${TitleCardBackground})`}}
        >
            <div className="eventColorOverlay"/>
            <h1>events</h1>
        </div>
        <div className="eventPostList">
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
        </>
    )
}

export default Events;