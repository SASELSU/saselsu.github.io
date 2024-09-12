import React from "react";
import "../styles/eboard.css"

import Backdrop from "../assets/eboard/eboardBackdrop.png"

const EBoard = () => {
    return (
        <>
        <div 
            className="eBoardTitleCard"
            style={{backgroundImage: `url(${Backdrop})`}}
        >
            <div className="eBoardColorOverlay"/>
            <h1>EXECUTIVE BOARD</h1>
        </div>
        {/* <div className="eBoard">
            <h1>This Page is Under Construction! Check back soon!  <br/> (The Webmaster is currently overhauling the website)</h1>
        </div> */}
        </>

    )
}

export default EBoard;