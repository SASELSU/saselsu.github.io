import React from "react";
import "../styles/join.css"
import usePageTracking from "../components/Common/TrafficTracker";

import Backdrop from "../assets/join/Backdropp.png"

const Join = () => {
    usePageTracking("Join Page");

    return (
        <>
            <div 
                className="joinTitleCard"
                style={{backgroundImage: `url(${Backdrop})`}}
            >
                <div className="joinColorOverlay"/>
                <h1>Join Us!</h1>
            </div>
            <div className="join">
            <h1>
                Wanna join SASE?
            </h1>
            <p>
                ALL RACES WELCOME!!!
            </p>
            <section className="joinInitiatives">
                <h1>Our Initiatives</h1>
                <section className="joinSASEHouse">
                    <h2>SASE Houses</h2>
                    <p>
                        
                    </p>
                </section>
                <section className="joinGeauxHack">
                    <h2>GeauxHack</h2>
                    <p>
                    Looking for a way to test your CompSci skills and meet your peers in tech?

                    </p>
                </section>
            </section>
            <section className="joinHow">
                <h1>How do I Join?</h1>
                <h2>
                    Step 1. Payment
                </h2>
                <p>
                    Pay $25 to @saselsu on Venmo
                </p>
                <h2>
                    Step 2. Complete Hazing Prevention Form
                </h2>

                <h2>
                    Step 3. Complete the Membership Form
                </h2>

                <h2>
                    Step 4. Hurrah!!
                </h2>
            </section>
        </div>
        </>
    )
}

export default Join;