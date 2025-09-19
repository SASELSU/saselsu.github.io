import "./Cloud2.css";
import Sase from "../../assets/logo/Sase.png";

function Cloud3 () {
    return (
        <div className="cloud3">
            {/* Cloud Shape */}
            <svg
                viewBox="0 0 300 100"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="auto"
            >
                <path
                    d="
            M60,60
            C55,50 45,45 35,50
            C20,40 10,60 25,70
            C15,85 30,95 45,85
            C55,95 75,95 80,85
            C90,95 110,95 120,85
            C135,95 160,85 150,70
            C170,60 160,40 140,50
            C130,30 100,30 90,50
            C80,35 65,35 60,60
            Z"
                    fill="#ffffff"
                    stroke="#cccccc"
                    strokeWidth="2"
                />
            </svg>
            <a href="https://www.saselsu.org/" target="_blank" rel="noopener noreferrer">
                <img src={Sase} alt="SASE Logo" className="cloud3-logo" />
            </a>
        </div>
    );
}

export default Cloud3;
