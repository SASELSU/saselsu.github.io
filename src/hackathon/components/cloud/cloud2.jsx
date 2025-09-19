import "./Cloud2.css";
import GDG from "../../assets/logo/GDSC.png";

function Cloud2 () {
    return (
        <div className="floating-cloud">
            <svg
                viewBox="0 0 260 140"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="auto"
            >
                <path
                    d="
            M40,100
            C20,120 0,110 10,80
            C-5,60 20,40 40,50
            C45,30 70,30 80,50
            C90,35 115,35 120,55
            C130,40 160,45 165,65
            C185,50 210,70 195,90
            C220,85 230,110 200,115
            C190,125 160,120 150,110
            C140,125 110,125 100,110
            C85,125 60,125 55,110
            C40,120 40,120 40,100
            Z"
                    fill="#ffffff"
                    stroke="#cccccc"
                    strokeWidth="3"
                />
            </svg>
            <a href="http://gdsclsu.org/" target="_blank" rel="noopener noreferrer">
                <img src={GDG} alt="GDG Logo" className="cloud2-logo" />
            </a>
        </div>
    );
}

export default Cloud2;
