import React from "react";
import "../styles/Events.css"

import TitleCardBackground from "../assets/events/eventPaint.png"
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
        </>
    )
}

export default Events;