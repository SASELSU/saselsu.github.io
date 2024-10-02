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

/* spring 24 */
import S24_GBM1 from "../assets/gallery/spring24/gbm1spring24.jpg"
import S24_ShellMock from "../assets/gallery/spring24/shellmockspring24.jpg"
import S24_DOWPD from "../assets/gallery/spring24/dowpdspring24.jpg"
import S24_GBM2 from "../assets/gallery/spring24/gbm2spring24.jpg"
import S24_PaintPic from "../assets/gallery/spring24/paintpicspring24.jpg"
import S24_GBM3 from "../assets/gallery/spring24/gbm3spring24.jpg"
import S24_AEDWork from "../assets/gallery/spring24/aedworkshopspring24.jpg"
import S24_CatHav from "../assets/gallery/spring24/cathavenspring24.jpg"
import S24_BANQ from "../assets/gallery/spring24/banqspring24.jpg"

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
            <h3>Fall 2024</h3>
            <div className="galleryCardContainer">
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
        <div className="gallery">
            <h3>Spring 2024</h3>
            <div className="galleryCardContainer">
            <GalleryCard 
                image={S24_BANQ}
                title="SASE BANQUET"
                date="APR 13 2024"
                link="https://www.facebook.com/media/set/?set=a.844242517731399&type=3"
            />
            <GalleryCard 
                image={S24_CatHav}
                title="CAT HAVEN"
                date="APR 7 2024"
                link="https://www.facebook.com/media/set/?set=a.836424258513225&type=3"
            />
            <GalleryCard 
                image={S24_AEDWork}
                title="SASE x AED WORKSHOP"
                date="APR 4 2024"
                link="https://www.facebook.com/media/set/?set=a.836409351848049&type=3"
            />
            <GalleryCard 
                image={S24_GBM3}
                title="3RD GEN BODY MEETING"
                date="MAR 21 2024"
                link="https://www.facebook.com/media/set/?set=a.825926476229670&type=3"
            />
            <GalleryCard 
                image={S24_PaintPic}
                title="Painting Picnic"
                date="MAR 7 2024"
                link="https://www.facebook.com/media/set/?set=a.817057377116580&type=3"
            />
            <GalleryCard 
                image={S24_GBM2}
                title="2ND GEN BODY MEETING"
                date="FEB 22 2024"
                link="https://www.facebook.com/media/set/?set=a.808438211311830&type=3"
            />
            <GalleryCard 
                image={S24_DOWPD}
                title="DOW Pro Dev Workshop"
                date="JAN 31 2024"
                link="https://www.facebook.com/media/set/?set=a.795540205934964&type=3"
            />
            <GalleryCard 
                image={S24_ShellMock}
                title="Shell Mock Interviews"
                date="JAN 30 2024"
                link="https://www.facebook.com/media/set/?set=a.795533712602280&type=3"
            />
            <GalleryCard 
                image={S24_GBM1}
                title="1ST GEN BODY MEETING"
                date="JAN 23 2024"
                link="https://www.facebook.com/media/set/?set=a.791290833026568&type=3"
            />
            </div>
        </div>
        <div className="gallery">
            <h3>Fall 2023</h3>
            <div className="galleryCardContainer">
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
                date="AUG 27 2023"
                link="https://www.facebook.com/media/set/?set=a.697377255751260&type=3"
            />
            </div>
        </div>

        </>

    )
}

export default Gallery;