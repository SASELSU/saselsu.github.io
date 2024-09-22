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

const Gallery = () => {
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
            <div className="galleryCardContainer">
            <GalleryCard 
                image={FallFest24}
                title="Fall Fest"
                date="SEPT 20 2024"
                link="https://www.facebook.com/media/set/?set=a.946623720826611&type=3"
            />
                <GalleryCard 
                image={Pickleball24}
                title="Boba Social"
                date="SEPT 19 2024"
                link="https://www.facebook.com/media/set/?set=a.946620777493572&type=3"
            />
            <GalleryCard 
                image={BobaSocial24}
                title="Boba Social"
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