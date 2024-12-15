import React from "react";
import "../styles/eboard.css"

import Backdrop from "../assets/eboard/eboardBackdrop.png"
import { 
    DescriptionCard,
 } from "./helpers/eboardHelpers";

//eboard pics
// import PresidentPic from "../assets/about/eboard/faris_khattak.png"
// import VicePresidentPic from "../assets/about/eboard/grishma_shrestha.png"
// import SecretaryPic from "../assets/about/eboard/jennie_tran.png"
// import TreasurerPic from "../assets/about/eboard/galvin_wong.png"
// import PublicRelationsPic from "../assets/about/eboard/camila_cuadra.png"
// import HistorianPic from "../assets/about/eboard/kim_nguyen.png"
// import GraphicDesignPic from "../assets/about/eboard/kris_lam.png"
// import WebmasterPic from "../assets/about/eboard/ricky_liang.png"
// import FundraisingPic from "../assets/about/eboard/winson_liu.png"
// import OutreachPic from "../assets/about/eboard/himangini_chauhan.png"
// import ProDevPic from "../assets/about/eboard/thanh_kirsch.png"
import PresidentPic from "../assets/about/eboard/big_faris.png"
import VicePresidentPic from "../assets/about/eboard/big_grishma.png"
import SecretaryPic from "../assets/about/eboard/big_jennie.png"
import TreasurerPic from "../assets/about/eboard/big_galvin.png"
import PublicRelationsPic from "../assets/about/eboard/big_camila.png"
import HistorianPic from "../assets/about/eboard/big_kim.png"
import GraphicDesignPic from "../assets/about/eboard/big_kris.png"
import WebmasterPic from "../assets/about/eboard/big_ricky.png"
import FundraisingPic from "../assets/about/eboard/big_winson.png"
import OutreachPic from "../assets/about/eboard/big_himangini.png"
import ProDevPic from "../assets/about/eboard/big_thanh.png"


const EBoard = () => {
    return (
        <>
        <div 
            className="eboardTitleCard"
            style={{backgroundImage: `url(${Backdrop})`}}
        >
            <div className="eboardColorOverlay"/>
            <h1>EBOARD</h1>
        </div>
        <div className="eboard">
            <h1>Meet the 2024 - 2025 Board!</h1>
            <div className="eboardCardHolder">
            <DescriptionCard
                title="President"
                name="Faris Khattak"
                major="Computer Science, Senior, Class of 25"
                image={PresidentPic}
                blurb="I joined SASE because I wanted to better my resume and interview skills to land a job. But I ended up staying because of the community that SASE offers. There are lots of really cool people in this club and its so fun connecting and getting to know everyone. SASE offers a place not just to provide better opportunities for people like me, but also to give them a place where they feel comfortable and have fun while getting those really sick jobs."
            />
            <DescriptionCard
                title="Vice President"
                name="Grishma Shrestha"
                major="Computer Science, Junior, Class of 26"
                image={VicePresidentPic}
                blurb="I joined SASE because I wanted to better my resume and interview skills to land a job. But I ended up staying because of the community that SASE offers. There are lots of really cool people in this club and its so fun connecting and getting to know everyone. SASE offers a place not just to provide better opportunities for people like me, but also to give them a place where they feel comfortable and have fun while getting those really sick jobs."
            />            
            <DescriptionCard
                title="Secretary"
                name="Jennie Tran"
                major="Mechanical Engineering, Junior, Class of 26"
                image={SecretaryPic}
                blurb="I joined SASE because I wanted to better my resume and interview skills to land a job. But I ended up staying because of the community that SASE offers. There are lots of really cool people in this club and its so fun connecting and getting to know everyone. SASE offers a place not just to provide better opportunities for people like me, but also to give them a place where they feel comfortable and have fun while getting those really sick jobs."
            />            
            <DescriptionCard
                title="Treasurer"
                name="Galvin Wong"
                major="Mechanical Engineering, Junior, Class of 26"
                image={TreasurerPic}
                blurb="I joined SASE because I wanted to better my resume and interview skills to land a job. But I ended up staying because of the community that SASE offers. There are lots of really cool people in this club and its so fun connecting and getting to know everyone. SASE offers a place not just to provide better opportunities for people like me, but also to give them a place where they feel comfortable and have fun while getting those really sick jobs."
            />            
            <DescriptionCard
                title="Public     Relations Chair"
                name="Camila Cuadra"
                major="Piano, Junior, Class of 26"
                image={PublicRelationsPic}
                blurb="I joined SASE because I wanted to better my resume and interview skills to land a job. But I ended up staying because of the community that SASE offers. There are lots of really cool people in this club and its so fun connecting and getting to know everyone. SASE offers a place not just to provide better opportunities for people like me, but also to give them a place where they feel comfortable and have fun while getting those really sick jobs."
            />
            <DescriptionCard
                title="Historian"
                name="Kim Nguyen"
                major="Computer Science, Junior, Class of 26"
                image={HistorianPic}
                blurb="I joined SASE because I wanted to better my resume and interview skills to land a job. But I ended up staying because of the community that SASE offers. There are lots of really cool people in this club and its so fun connecting and getting to know everyone. SASE offers a place not just to provide better opportunities for people like me, but also to give them a place where they feel comfortable and have fun while getting those really sick jobs."
            />
            <DescriptionCard
                title="Graphic Design"
                name="Kristina Lam"
                major="Biology, Sophomore, Class of 27"
                image={GraphicDesignPic}
                blurb="I joined SASE because I wanted to better my resume and interview skills to land a job. But I ended up staying because of the community that SASE offers. There are lots of really cool people in this club and its so fun connecting and getting to know everyone. SASE offers a place not just to provide better opportunities for people like me, but also to give them a place where they feel comfortable and have fun while getting those really sick jobs."
            />
            <DescriptionCard
                title="Webmaster"
                name="Ricky Liang"
                major="Computer Science, Sophomore, Class of 27"
                image={WebmasterPic}
                blurb="I joined SASE because I wanted to better my resume and interview skills to land a job. But I ended up staying because of the community that SASE offers. There are lots of really cool people in this club and its so fun connecting and getting to know everyone. SASE offers a place not just to provide better opportunities for people like me, but also to give them a place where they feel comfortable and have fun while getting those really sick jobs."
            />
            <DescriptionCard
                title="Fundraising Chair"
                name="Winson Liu"
                major="Computer Science, Senior, Class of 25"
                image={FundraisingPic}
                blurb="I joined SASE because I wanted to better my resume and interview skills to land a job. But I ended up staying because of the community that SASE offers. There are lots of really cool people in this club and its so fun connecting and getting to know everyone. SASE offers a place not just to provide better opportunities for people like me, but also to give them a place where they feel comfortable and have fun while getting those really sick jobs."
            />
            <DescriptionCard
                title="Outreach Chair"
                name="Himangini Chauhan"
                major="Mechanical Engineering, Sophomore, Class of 27"
                image={OutreachPic}
                blurb="I joined SASE because I wanted to better my resume and interview skills to land a job. But I ended up staying because of the community that SASE offers. There are lots of really cool people in this club and its so fun connecting and getting to know everyone. SASE offers a place not just to provide better opportunities for people like me, but also to give them a place where they feel comfortable and have fun while getting those really sick jobs."
            />
            <DescriptionCard
                title="Professional Development Chair"
                name="Thanh Kirsch"
                major="Biological Engineering, Sophomore, Class of 27"
                image={ProDevPic}
                blurb="I joined SASE because I wanted to better my resume and interview skills to land a job. But I ended up staying because of the community that SASE offers. There are lots of really cool people in this club and its so fun connecting and getting to know everyone. SASE offers a place not just to provide better opportunities for people like me, but also to give them a place where they feel comfortable and have fun while getting those really sick jobs."
            />
            </div>

        </div>
        </>

    )
}

export default EBoard;