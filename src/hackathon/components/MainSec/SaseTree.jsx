
import "./SaseTree.css";
import SASETree from "../../assets/SASEtreeV4.svg"
import Cloud1 from "../cloud/cloud1"

import useViewportHeightFix from "../../helpers/setViewportHeight"
import Cloud2 from "../cloud/cloud2";
import Cloud3 from "../cloud/cloud3";
import Sun from "../cloud/sun";

function SaseTree() {
    useViewportHeightFix();
  return (
    <div className="topBackground">
      <Sun />
      <div className="cloudBehind">
        <Cloud2 />
        <Cloud3 />
      </div>
      <Cloud1 />
      <img src={SASETree} alt="Tree" className="responsiveImage" />
      
    </div>
  );
}

export default SaseTree;
