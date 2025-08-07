import {
    React,
    useState
} from "react";

import SASETree from "./components/MainSec/SaseTree";
import InfoSec from "./components/InfoSec/InfoSection"

import "./hackathon.css"
//#7abbb8ff

import usePageTracking from "../components/Common/TrafficTracker";

const Hackathon = () => {
    usePageTracking("Hackathon Page");
    return (
        <> 
            <SASETree />
            <div className="theDivToRuleAllDivs">
            <InfoSec />
            </div>


        </>
    )
}

export default Hackathon;