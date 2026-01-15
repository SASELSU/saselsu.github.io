import Backdrop from "../assets/about/eboard/everyone.jpg";
import eboardData from '../assets/eboard/eboard.json';
import {
    DescriptionCard
} from "./helpers/eboardHelpers";

// eboard pics
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
/*import PresidentPic from "../assets/about/eboard/big_faris.png";
import VicePresidentPic from "../assets/about/eboard/big_grishma.png";
import SecretaryPic from "../assets/about/eboard/big_jennie.png";
import TreasurerPic from "../assets/about/eboard/big_galvin.png";
import PublicRelationsPic from "../assets/about/eboard/big_camila.png";
import HistorianPic from "../assets/about/eboard/big_kim.png";
import GraphicDesignPic from "../assets/about/eboard/big_kris.png";
import WebmasterPic from "../assets/about/eboard/big_ricky.png";
import FundraisingPic from "../assets/about/eboard/big_winson.png";
import OutreachPic from "../assets/about/eboard/big_himangini.png";
import ProDevPic from "../assets/about/eboard/big_thanh.png";*/

import PresidentPic from "../assets/about/eboard/galvin.jpg";
import ExternalVicePresidentPic from "../assets/about/eboard/himangini.png";
import InternalVicePresidentPic from "../assets/about/eboard/jennie.png";
import SecretaryPic from "../assets/about/eboard/urwah.png";
import TreasurerPic from "../assets/about/eboard/jon.png";
import PublicRelationsPic from "../assets/about/eboard/andrew.png";
import HistorianPic from "../assets/about/eboard/vincent.png";
import GraphicDesignPic from "../assets/about/eboard/susan.png";
import WebmasterPic from "../assets/about/eboard/me_edit_v1.png";
import FundraisingPic from "../assets/about/eboard/daniel.png";
import OutreachPic from "../assets/about/eboard/hams.png";
import ProDevPic from "../assets/about/eboard/vinh.png";



import "../styles/eboard.css";

const imageMap: Record<string, string> = {
  PresidentPic,
  ExternalVicePresidentPic,
  InternalVicePresidentPic,
  SecretaryPic,
  TreasurerPic,
  PublicRelationsPic,
  HistorianPic,
  GraphicDesignPic,
  WebmasterPic,
  FundraisingPic,
  OutreachPic,
  ProDevPic,
};

const Eboard = ()/*: ReactNode*/ => {
    return (
        <>
            <div
                className="eboardTitleCard"
                style={{ backgroundImage: `url(${Backdrop})` }}
            >
                <div className="eboardColorOverlay" />
                <h1>EBOARD</h1>
            </div>
            <div className="eboard">
                <div
  className="eboard"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "3rem 1.5rem",
  }}
>
  {eboardData.map((member, i) => (
    <DescriptionCard
      key={i}
      intro={member.intro}
      title={member.position}
      name={member.name}
      major={member.major}
      image={imageMap[member.image]}
      q1={member.question}
      a1={member.answer}
      linkedin={member.linkedin}
    />
  ))}
</div>


                {/*<h1>Meet the 2024 - 2025 Board!</h1>
                <div className="eboardCardHolder">
                    <DescriptionCard
                        intro="Hey, I'm Faris!"
                        title="President"
                        name="Faris Khattak"
                        major="4th Year Computer Science, Software Eng."
                        image={PresidentPic}
                        q1="Why did you join SASE?"
                        a1="I joined SASE because I wanted to better my resume and interview skills to land a job. But I ended up staying because of the community that SASE offers. There are lots of really cool people in this club and its so fun connecting and getting to know everyone."
                        linkedin="https://www.linkedin.com/in/faris-khattak/"
                    />
                    <DescriptionCard
                        intro="Hi! It's Grishma<3"
                        title="Vice President"
                        name="Grishma Shrestha"
                        major="3rd Year Computer Science, Software Eng."
                        image={VicePresidentPic}
                        q1="Why do you love SASE?"
                        a1="I love SASE because of the tight knit and lively community! I've also gained many opportunities through SASE such as going to Boston for nationals, gaining leadership experience, and polishing up my professional development skills."
                        linkedin="https://www.linkedin.com/in/grishma-shrestha/"
                    />
                    <DescriptionCard
                        intro="Hello! I'm Jennie!"
                        title="Secretary"
                        name="Jennie Tran"
                        major="3rd Year Mechanical Engineering"
                        image={SecretaryPic}
                        q1="Why did you join SASE?"
                        a1="I joined SASE because of its warm and welcoming community! It’s given me the chance to connect with amazing people who share similar goals, grow professionally, and challenge myself in new ways."
                        linkedin="https://www.linkedin.com/in/jtran14/"
                    />
                    <DescriptionCard
                        intro="Hey, I'm Galvin!"
                        title="Treasurer"
                        name="Galvin Wong"
                        major="3rd Year Mechanical Engineering"
                        image={TreasurerPic}
                        q1="What does SASE mean to you?"
                        a1="For me, SASE is a supportive community where diverse individuals grow personally and professionally. It’s a space where Asian Americans can embrace their heritage while fostering connections and witnessing inspiring transformations."
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
                        intro="Hellooo! It's Kim!"
                        title="Historian"
                        name="Kim Nguyen"
                        major="3rd Year Computer Science, Cybersecurity"
                        image={HistorianPic}
                        q1="Why do you love SASE?"
                        a1="SASE gave me an opportunity to make lasting connections, whether it's friends or in the realms of professional development. I've met so many talented and wonderful people and honestly, it was probably the first club I felt like I belonged in."
                        linkedin="https://www.linkedin.com/in/tdvn/"
                    />
                    <DescriptionCard
                        intro="Hi, I'm Kristina!"
                        title="Graphic Design"
                        name="Kristina Lam"
                        major="2nd Year Biology, Pre-Med, also known as Kris :D"
                        image={GraphicDesignPic}
                        q1="Why did you join SASE?"
                        a1="I joined SASE for its welcoming community and to step out of my comfort zone. As an introvert, it helped me connect with peers in my major and enhance my education. I aim to keep SASE friendly and help others find opportunities to achieve their goals."
                        linkedin="https://www.linkedin.com/in/kristina-lam-3831082b6/"
                    />
                    <DescriptionCard
                        intro="Ahoy! I'm Ricky!"
                        title="Webmaster"
                        name="Ricky Liang"
                        major="2nd Year Computer Science, Software Eng."
                        image={WebmasterPic}
                        q1="Why did you join SASE?"
                        a1="Coming from Mu Alpha Theta in high school, I wanted to be a part of another STEM oriented community. SASE@LSU offered exactly that space for me and I ended up loving the club and the friends I've gained from it!"
                        linkedin="https://www.linkedin.com/in/rickyxliang/"
                        webmasterthing="hehe i made this site too"
                    />
                    <DescriptionCard
                        intro="Hi, I'm Winson!"
                        title="Fundraising Chair"
                        name="Winson Liu"
                        major="4th Year Computer Science, Cybersecurity"
                        image={FundraisingPic}
                        q1="Why did you join SASE?"
                        a1="I joined SASE after Lexus first convinced me to join. I also joined SASE because it provides a safe and productive environment for Asian engineers and scientists."
                        linkedin="https://www.linkedin.com/in/winson-liu-3626802b3/"
                    />
                    <DescriptionCard
                        intro="Hi! I'm Himangini!"
                        title="Outreach Chair"
                        name="Himangini Chauhan"
                        major="2nd Year Mechanical Engineering"
                        image={OutreachPic}
                        q1="Why do you love SASE?"
                        a1="I love SASE for its perfect balance of personal and professional growth. It offers opportunities to meet amazing people, experience different cultures, and prepares you for the professional world with mock interviews, networking, and more!"
                        linkedin="https://www.linkedin.com/in/himangini-chauhan-007bb4226/"
                    />
                    <DescriptionCard
                        intro="Hey, I'm Thanh!"
                        title="Professional Development Chair"
                        name="Thanh Kirsch"
                        major="2nd Year Biological Engineering, Pre-Med"
                        image={ProDevPic}
                        q1="Why did you join SASE?"
                        a1="On-campus involvement is underrated. Finding student org involvement at LSU makes campus feel alive and welcoming. To me, SASE combines the advantages of a career-focused club with the community of a hobby club, and I found that vibe really appealing."
                        linkedin="https://www.linkedin.com/in/thanh-kirsch/"
                    />
                </div>*/}

            </div>
        </>

    );
};

export default Eboard;
