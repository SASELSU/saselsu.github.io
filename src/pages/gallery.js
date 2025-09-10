import React from "react";
import "../styles/gallery.css"

import Backdrop from "../assets/gallery/galleryBackdrop.png"
import { GalleryCard } from "./helpers/galleryHelpers";

/* fall 24 */
import TigerConnections from "../assets/gallery/fall24/TigerConnections.jpeg"
import BobaSocial24 from "../assets/gallery/fall24/bobaSocial24.png"
import DowWorkshop24 from "../assets/gallery/fall24/DOWWorkshop24.jpeg"
import Pickleball24 from "../assets/gallery/fall24/galleryPickleballSocial.jpeg"
import FallFest24 from "../assets/gallery/fall24/galleryFallFest.jpeg"
import ExxonMock from "../assets/gallery/fall24/exxonmockinterview24.png"
import PaintF24 from "../assets/gallery/fall24/paintsocialfall24.jpg"
import GBM2F24 from "../assets/gallery/fall24/gbm2.jpg"
import GeauxHackWorkshopsF24 from "../assets/gallery/fall24/hackathonWorkshops.jpg"
import GeauxHackF24 from "../assets/gallery/fall24/GeauxHack.jpg"
import FiveKRun from "../assets/gallery/fall24/5k.jpg"
import BooAtZoo from "../assets/gallery/fall24/booAtTheZoo.jpg"
import SASExAEDMCAT from "../assets/gallery/fall24/SASEAEDMCAT.jpg"
import CAA from "../assets/gallery/fall24/animalAlliance.png"
import MovieNight from "../assets/gallery/fall24/movienight.jpg"
import GBM3F24 from "../assets/gallery/fall24/gbm3.jpg"
import Potluck from "../assets/gallery/fall24/potluck.jpg"
import Quinlan from "../assets/gallery/fall24/quinlan.jpg"


import usePageTracking from "../components/Common/TrafficTracker";
const Gallery = () => {
    usePageTracking("Gallery Page");
    return (
        <>
        <div 
            className="galleryTitleCard"
            style={{backgroundImage: `url(${Backdrop})`}}
        >
            <div className="galleryColorOverlay"/>
            <h1>GALLERY</h1>
        </div>

        <div className="gallery">
            <h1>Fall '25</h1>
            <div className="galleryCardContainer">
            {/*<GalleryCard 
                image={Quinlan}
                title="SASExAED Quinlan Talk"
                date="NOV 21 2024"
                link="https://www.facebook.com/media/set/?set=a.984937966995186&type=3"
            />*/}
            
            </div>
        </div>
        </>

    )
}

export default Gallery;