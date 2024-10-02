import React from "react";
import "../styles/gallery.css"

import Backdrop from "../assets/gallery/galleryBackdrop.png"
import { GalleryCard } from "./helpers/galleryHelpers";

/* fall 24 */
import F24_TigerConnections from "../assets/gallery/fall24/TigerConnections.jpeg"
import F24_BobaSocial from "../assets/gallery/fall24/bobaSocial24.png"
import F24_DowWorkshop from "../assets/gallery/fall24/DOWWorkshop24.jpeg"
import F24_Pickleball from "../assets/gallery/fall24/galleryPickleballSocial.jpeg"
import F24_FallFest from "../assets/gallery/fall24/galleryFallFest.jpeg"
import F24_ExxonMock from "../assets/gallery/fall24/exxonmockinterview24.png"

// spring24
import S24_GBM1 from "../assets/gallery/spring24/gbm1spring24.jpg"
import S24_ShellMock from "../assets/gallery/spring24/shellmockspring24.jpg"
import S24_DOWPD from "../assets/gallery/spring24/dowpdspring24.jpg"
import S24_GBM2 from "../assets/gallery/spring24/gbm2spring24.jpg"
import S24_PaintPic from "../assets/gallery/spring24/paintpicspring24.jpg"
import S24_GBM3 from "../assets/gallery/spring24/gbm3spring24.jpg"
import S24_AEDWork from "../assets/gallery/spring24/aedworkshopspring24.jpg"
import S24_CatHav from "../assets/gallery/spring24/cathavenspring24.jpg"
import S24_BANQ from "../assets/gallery/spring24/banqspring24.jpg"

// fall 23
import F23_TigerConnections from "../assets/gallery/fall23/tigerconnectfall23.jpg"
import F23_Boba from "../assets/gallery/fall23/bobasocialspring23.jpg"
import F23_GBM1 from "../assets/gallery/fall23/gbm1fall23.jpg"
import F23_GBM2 from "../assets/gallery/fall23/gbm2fall23.jpg"
import F23_BeachVB from "../assets/gallery/fall23/beachvbfall23.jpg"
import F23_AED from "../assets/gallery/fall23/aedfall23.jpg"
import F23_GBM3 from "../assets/gallery/fall23/gbm3fall23.jpg"
import F23_Karaoke from "../assets/gallery/fall23/karpotfall23.jpg"
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
                image={F24_ExxonMock}
                title="Exxon Mock Interview"
                date="SEPT 30 2024"
                link="https://www.facebook.com/media/set/?set=a.955275746628075&type=3"
            />
            <GalleryCard 
                image={F24_FallFest}
                title="Fall Fest"
                date="SEPT 20 2024"
                link="https://www.facebook.com/media/set/?set=a.946623720826611&type=3"
            />
            <GalleryCard 
                image={F24_Pickleball}
                title="Pickleball x DOW Social"
                date="SEPT 19 2024"
                link="https://www.facebook.com/media/set/?set=a.946620777493572&type=3"
            />
            <GalleryCard 
                image={F24_BobaSocial}
                title="GBM 1: Boba Social"
                date="SEPT 5 2024"
                link="https://www.facebook.com/media/set/?set=a.935833585238958&type=3"
            />
            <GalleryCard 
                image={F24_DowWorkshop}
                title="Dow PD Workshop"
                date="SEPT 4 2024"
                link="https://www.facebook.com/media/set/?set=a.935800311908952&type=3"
            />
            <GalleryCard 
                image={F24_TigerConnections}
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
                image={F23_Karaoke}
                title="Karaoke Potluck"
                date="NOV 17 2023"
                link="https://www.facebook.com/media/set/?set=a.749839857171666&type=3"
            />
            <GalleryCard 
                image={F23_AED}
                title="AED SCIENCE PANEL"
                date="NOV 2 2023"
                link="https://www.facebook.com/media/set/?set=a.739053768250275&type=3"
            />
            <GalleryCard 
                image={F23_GBM3}
                title="3RD GEN BODY MEETING"
                date="NOV 16 2023"
                link="https://www.facebook.com/media/set/?set=a.749834007172251&type=3"
            />
            <GalleryCard 
                image={F23_BeachVB}
                title="DOW Beach Volleyball"
                date="OCT 27 2023"
                link="https://www.facebook.com/media/set/?set=a.739030288252623&type=3"
            />
            <GalleryCard 
                image={F23_GBM2}
                title="2ND GEN BODY MEETING"
                date="OCT 19 2023"
                link="https://www.facebook.com/media/set/?set=a.730506515771667&type=3"
            />
            <GalleryCard 
                image={F23_GBM1}
                title="1ST GEN BODY MEETING"
                date="SEPT 21 2023"
                link="https://www.facebook.com/media/set/?set=a.718195513669434&type=3"
            />
            <GalleryCard 
                image={F23_Boba}
                title="Boba Social"
                date="AUG 31 2023"
                link="https://www.facebook.com/media/set/?set=a.700774295411556&type=3"
            />
            <GalleryCard 
                image={F23_TigerConnections}
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