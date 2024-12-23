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
                intro="Hey, I'm Faris!"
                title="President"
                name="Faris Khattak"
                major="4th Year Computer Science"
                image={PresidentPic}
                q1="Why did you join SASE?"
                a1="I joined SASE because I wanted to better my resume and interview skills to land a job. But I ended up staying because of the community that SASE offers. There are lots of really cool people in this club and its so fun connecting and getting to know everyone."
                linkedin="https://www.linkedin.com/in/faris-khattak/"
            />
            <DescriptionCard
                intro="Hi, I'm Grishma!"
                title="Vice President"
                name="Grishma Shrestha"
                major="3rd Year Computer Science, Software Eng."
                image={VicePresidentPic}
                q1="Why did you join SASE?"
                a1="the tight knit and lively community!"            
                linkedin="https://www.linkedin.com/in/grishma-shrestha/"    
            />            
            <DescriptionCard
                intro="Hello! I'm Jennie!"
                title="Secretary"
                name="Jennie Tran"
                major="3rd Year Mechanical Engineering"
                image={SecretaryPic}
                q1="Why did you join SASE?"
                a1="Pending Answer: Can't spell secretary without secret."
                linkedin="https://www.linkedin.com/in/jtran14/"            
            />            
            <DescriptionCard
                intro="Hi, I'm Galvin!"
                title="Treasurer"
                name="Galvin Wong"
                major="3rd Year Mechanical Engineering"
                image={TreasurerPic}
                q1="Why did you join SASE?"
                a1="Pending Answer: Galvin is in Hong Kong right now."            
                linkedin="https://www.linkedin.com/in/galvin-wong-lsu-sase/"    
            />            
            <DescriptionCard
                intro="Hi, I'm Camila!"
                title="Public Relations Chair"
                name="Camila Cuadra"
                major="3rd Year Piano, Minor in Biology, Pre-Med"
                image={PublicRelationsPic}
                q1="Why did you join SASE?"
                a1="I joined SASE because I loved the community and the family connection we have with one another. I enjoy being able to relate with fellow students in the pre-med field and have amazing professional development opportunities that helped me grow as a student."            
                linkedin="https://www.linkedin.com/in/camila-cuadra-a87966305/"
            />
            <DescriptionCard
                intro="Hi, I'm Kim!"
                title="Historian"
                name="Kim Nguyen"
                major="3rd Year Computer Science, Cybersecurity"
                image={HistorianPic}
                q1="Why did you join SASE?"
                a1="Lexus found me stranded in PFT on a cold morning my freshman year and told me to go to SASE meetings."  
                linkedin="https://www.linkedin.com/in/tdvn/"
            />
            <DescriptionCard
                intro="Hi, I'm Kris!"
                title="Graphic Design"
                name="Kristina Lam"
                major="2nd Year Biology, Pre-Med"
                image={GraphicDesignPic}
                q1="Why did you join SASE?"
                a1="Pending Answer: Kris is away."            
                linkedin="https://www.linkedin.com/in/kristina-lam-3831082b6/"    
            />
            <DescriptionCard
                intro="Hi, I'm Ricky!"
                title="Webmaster"
                name="Ricky Liang"
                major="2nd Year Computer Science, Software Eng."
                image={WebmasterPic}
                q1="Why did you join SASE?"
                a1="Coming from Mu Alpha Theta in high school, I wanted to be a part of another STEM oriented community. SASE@LSU offered exactly that space for me and I ended up loving the club and the friends I've gained from it!"
                linkedin="https://www.linkedin.com/in/rickyxliang/"
            />
            <DescriptionCard
                intro="Hi, I'm Winson!"
                title="Fundraising Chair"
                name="Winson Liu"
                major="4th Year Computer Science, Cybersecurity"
                image={FundraisingPic}
                q1="Why did you join SASE?"
                a1="wanted to be involved with SASE more during my final year at LSU and make lasting memories."
                linkedin="https://www.linkedin.com/in/winson-liu-3626802b3/"           
                />
            <DescriptionCard
                intro="Hi, I'm Himangini!"
                title="Outreach Chair"
                name="Himangini Chauhan"
                major="2nd Year Mechanical Engineering"
                image={OutreachPic}
                q1="Why did you join SASE?"
                a1="Community and professional development opportunities (and the boba!)"
                linkedin="https://www.linkedin.com/in/himangini-chauhan-007bb4226/"
            />
            <DescriptionCard
                intro="Hi, I'm Thanh!"
                title="Professional Development Chair"
                name="Thanh Kirsch"
                major="2nd Year Biological Engineering, Pre-Med"
                image={ProDevPic}
                q1="Why did you join SASE?"
                a1="On-campus involvement is underrated. Finding student org involvement at LSU makes campus feel alive and welcoming. To me, SASE combines the advantages of a career-focused club with the community of a hobby club, and I found that vibe really appealing."            
                linkedin="https://www.linkedin.com/in/thanh-kirsch/"    
            />
            </div>

        </div>
        </>

    )
}

export default EBoard;