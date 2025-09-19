
import SASETree from "./components/MainSec/SaseTree";
import InfoSec from "./components/InfoSec/InfoSection"

import "./hackathon.css"

import usePageTracking from "../components/Common/TrafficTracker";

const Hackathon = () => {
    usePageTracking("Hackathon Page");
    return (
        <>
            <div>
                <SASETree />
                <div className="theDivToRuleAllDivs">
                    <InfoSec />
                </div>
            </div>
        </>
    )
}

export default Hackathon;