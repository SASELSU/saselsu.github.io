import React from "react";
import "../styles/sponsors.css"
import usePageTracking from "../components/Common/TrafficTracker";

import Backdrop from "../assets/sponsors/Backdrop.jpg"
import Exxon from "../assets/home/sponsors/Exxon-Logo.png"
import Dow from "../assets/home/sponsors/Dow_Chemical_Company_logo.svg.png"
import Marathon from "../assets/home/sponsors/marathon.png"
import Shell from "../assets/home/sponsors/Shell_logo.svg.png"
import Chevron from "../assets/home/sponsors/Chevron.webp"
import SponsorshipPacket from "../assets/SASE@LSU Sponsorship.pdf"


const Sponsors = () => {
    usePageTracking("Sponsors Page");

    return (
        <>
            <div 
                className="sponsorsTitleCard"
                style={{backgroundImage: `url(${Backdrop})`}}
            >
                <div className="sponsorsColorOverlay"/>
                <h1>SPONSORS</h1>
            </div>
            <div className="sponsors">
            <h1>THANK YOU TO OUR SPONSORS!</h1>
            <div className="sponsorList">
                <img src={Exxon} alt="Exxon"></img>
                <img src={Dow} alt="Dow"></img>
                <img src={Chevron} alt="Chevron"></img>
                <img src={Shell} alt="Shell"></img>
                <img src={Marathon} alt="Marathon"></img>
            </div>
            <p>
            Interested in becoming a partner with the LSU Society of Asian Scientists and Engineers (SASE)? <br/>Click the button below to download our sponsorship packet!
            </p>
            <a href={SponsorshipPacket} target="_blank" rel="noreferrer">
                Sponsorship Package
            </a>
        </div>
        </>
    )
}

export default Sponsors;