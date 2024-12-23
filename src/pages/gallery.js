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
            <h1>Fall 24'</h1>
            <div className="galleryCardContainer">
            <GalleryCard 
                image={Quinlan}
                title="SASExAED Quinlan Talk"
                date="NOV 21 2024"
                link="https://www.facebook.com/media/set/?set=a.984937966995186&type=3"
            />
            ç<GalleryCard 
                image={Potluck}
                title="SASExVSA Potluck"
                date="NOV 15 2024"
                link="https://www.facebook.com/media/set/?set=a.984937966995186&type=3"
            />
            <GalleryCard 
                image={GBM3F24}
                title="GBM 3: Despicable Me"
                date="NOV 14 2024"
                link="https://www.facebook.com/media/set/?set=a.984937966995186&type=3"
            />
            <GalleryCard 
                image={MovieNight}
                title="Movie Night: Rush Hour"
                date="NOV 12 2024"
                link="https://www.facebook.com/media/set/?set=a.984937966995186&type=3"
            />
            <GalleryCard 
                image={SASExAEDMCAT}
                title="SASExAED MCAT Prep"
                date="NOV 7 2024"
                link="https://www.facebook.com/media/set/?set=a.984937966995186&type=3"
            />
            <GalleryCard 
                image={CAA}
                title="CAA Volunteering"
                date="NOV 5 2024"
                link="https://www.facebook.com/media/set/?set=a.984949486994034&type=3"
            />

            <GalleryCard 
                image={FiveKRun}
                title="5K Run Volunteering"
                date="NOV 1 2024"
                link="https://www.facebook.com/media/set/?set=a.980571587431824&type=3"
            />
            <GalleryCard 
                image={GeauxHackF24}
                title="GeauxHack '24"
                date="NOV 1-3 2024"
                link="https://www.facebook.com/media/set/?set=a.980556994099950&type=3"
            />
            <GalleryCard 
                image={GeauxHackWorkshopsF24}
                title="GeauxHack Workshops"
                date="OCT 23, 28, 30 2024"
                link="https://www.facebook.com/media/set/?set=a.974575718031411&type=3"
            />
            <GalleryCard 
                image={BooAtZoo}
                title="Boo At The Zoo"
                date="OCT 26, 27 2024"
                link="https://www.facebook.com/media/set/?set=a.980880604067589&type=3"
            />
            <GalleryCard 
                image={GBM2F24}
                title="GBM 2: One Piece"
                date="OCT 24 2024"
                link="https://www.facebook.com/media/set/?set=a.974585968030386&type=3"
            />
            <GalleryCard 
                image={PaintF24}
                title="Painting Social"
                date="OCT 15 2024"
                link="https://www.facebook.com/media/set/?set=a.967746402047676&type=3"
            />
            <GalleryCard 
                image={ExxonMock}
                title="Exxon Mock Interview"
                date="SEPT 30 2024"
                link="https://www.facebook.com/media/set/?set=a.955275746628075&type=3"
            />
            <GalleryCard 
                image={FallFest24}
                title="Fall Fest"
                date="SEPT 20 2024"
                link="https://www.facebook.com/media/set/?set=a.946623720826611&type=3"
            />
            <GalleryCard 
                image={Pickleball24}
                title="Pickleball x DOW Social"
                date="SEPT 19 2024"
                link="https://www.facebook.com/media/set/?set=a.946620777493572&type=3"
            />
            <GalleryCard 
                image={BobaSocial24}
                title="GBM 1: Boba Social"
                date="SEPT 5 2024"
                link="https://www.facebook.com/media/set/?set=a.935833585238958&type=3"
            />
            <GalleryCard 
                image={DowWorkshop24}
                title="Dow PD Workshop"
                date="SEPT 4 2024"
                link="https://www.facebook.com/media/set/?set=a.935800311908952&type=3"
            />
            <GalleryCard 
                image={TigerConnections}
                title="Tiger Connections"
                date="AUG 29 2024"
                link="https://www.facebook.com/media/set/?set=a.933565605465756&type=3"
            />
            </div>
        </div>
        </>

    )
}

export default Gallery;