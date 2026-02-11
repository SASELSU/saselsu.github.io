import Backdrop from "../assets/about/eboard/everyone.jpg";
import eboardData from '../assets/eboard/eboard.json';
import {
    DescriptionCard
} from "./helpers/eboardHelpers";

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

const Eboard = () => {
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
                  className="eboardCardHolder"
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
            </div>
        </>
    );
};

export default Eboard;