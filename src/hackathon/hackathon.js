import React from "react";
import "./hackathon.css"

import Map from "./assets/blockMap.png"
import Clouds from "./assets/blockCloud.png"
const Hackathon = () => {
    return (
        <div className="hackathon">
            <div className="hackathonTitleCard">
                <h1>GEAUX HACK</h1>
                <div className="globe">
                    <div className="map">
                        <img src={Map}/>
                        <img src={Map}/>
                    </div>
                    <div className="clouds">
                        <img src={Clouds}/>
                        <img src={Clouds}/>
                    </div>
                </div>

                <h1>GEAUX HACK</h1>

            </div>


        </div>
    )
}

export default Hackathon;