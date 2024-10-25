import React from "react";
import "../styles/nationals.css"
import usePageTracking from "../components/Common/TrafficTracker";

import TitleCardBackground from "../assets/nationals/cover.png"

const Nationals = () => {
    usePageTracking("Nationals Page");

    return (
        <>
        <div 
            className="nationalsTitleCard"
            style={{backgroundImage: `url(${TitleCardBackground})`}}
        >
            <div className="nationalsColorOverlay"/>
            <h1>NATIONALS</h1>
        </div>

        <div className="nationals">
            <h1>This Page is Under Construction! Check back soon! <br/> (The Webmaster is currently overhauling the website)</h1>
        </div>
        </>

    )
}

export default Nationals;