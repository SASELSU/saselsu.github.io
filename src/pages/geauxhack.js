import React from "react";
import "../styles/geauxhack.css"
import usePageTracking from "../components/Common/TrafficTracker";

import Backdrop from "../assets/geauxhack/Backdrop.jpg"


const GeauxHack = () => {
    usePageTracking("GeauxHack");

    return (
        <>
            <div 
                className="geauxhackTitleCard"
                style={{backgroundImage: `url(${Backdrop})`}}
            >
                <div className="geauxhackColorOverlay"/>
                <h1>GEAUXHACK</h1>
            </div>
            <div className="geauxhack">

            </div>
        </>
    )
}

export default GeauxHack;