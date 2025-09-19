import { type ReactNode } from "react";

import farisPic from "../assets/farispic.png";

import "../styles/faris.css";

const Faris = (): ReactNode => {
    return (
        <>
            <img src={farisPic} className="pic" alt="Faris"></img>
        </>
    );
};

export default Faris;
