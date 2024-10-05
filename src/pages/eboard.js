import React from "react";
import "../styles/eboard.css"

import Backdrop from "../assets/eboard/eboardBackdrop.png"
import { DescriptionCard } from "./helpers/eboardHelpers";

//eboard pics
import PresidentPic from "../assets/eboard/eboard/faris_khattak.jpg"
import VicePresidentPic from "../assets/eboard/eboard/grishma_shrestha_2.jpg"
import SecretaryPic from "../assets/eboard/eboard/jennie_tran.png"
import TreasurerPic from "../assets/eboard/eboard/galvin_wong.png"
import PublicRelationsPic from "../assets/eboard/eboard/camila_cuadra.jpg"
import HistorianPic from "../assets/eboard/eboard/kim_nguyen.png"
import GraphicDesignPic from "../assets/eboard/eboard/kris_lam.png"
import WebmasterPic from "../assets/about/eboard/ricky_liang.jpeg"
import FundraisingPic from "../assets/eboard/eboard/winson_liu.png"
import OutreachPic from "../assets/eboard/eboard/himangini_chauhan.png"
import ProDevPic from "../assets/eboard/eboard/thanh_kirsch.png"


const EBoard = () => {
    return (
        <>
        <div 
            className="eBoardTitleCard"
            style={{backgroundImage: `url(${Backdrop})`}}
        >
            <div className="eBoardColorOverlay"/>
            <h1>EBOARD</h1>
        </div>
        <div className="eBoard">
            <h1>Meet the 2024 - 2025 Board!</h1>

            <DescriptionCard
                name="Faris Khattak"
                major="Computer Science, Senior, Class of 25"
                image={PresidentPic}
                blurb="I joined SASE because I wanted to better my resume and interview skills to land a job. But I ended up staying because of the community that SASE offers. There are lots of really cool people in this club and its so fun connecting and getting to know everyone. SASE offers a place not just to provide better opportunities for people like me, but also to give them a place where they feel comfortable and have fun while getting those really sick jobs."
            />
            <DescriptionCard
                name="Grishma Shrestha"
                major="Computer Science, Junior, Class of 26"
                image={VicePresidentPic}
                blurb="I joined SASE because I wanted to better my resume and interview skills to land a job. But I ended up staying because of the community that SASE offers. There are lots of really cool people in this club and its so fun connecting and getting to know everyone. SASE offers a place not just to provide better opportunities for people like me, but also to give them a place where they feel comfortable and have fun while getting those really sick jobs."
            />
        </div>
        </>

    )
}

export default EBoard;