import React from "react";
import "./hackathon.css"

import Map from "./assets/blockMap.png"

const Hackathon = () => {
    return (
        <div className="hackathon">
            <div className="hackathonTitleCard">
                <div className="globe">
                    <img src={Map}/>
                    <img src={Map}/>
                </div>
            </div>


        </div>
    )
}

export default Hackathon;