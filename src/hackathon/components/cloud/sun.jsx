import Suns from "../../assets/cloud/sun.png";
import "./Cloud2.css";
import HomeButton from "../../assets/button/home.png";
function Sun () {
    return (
        <div className="sun-wrapper">
            <img src={Suns} alt="Sun" className="sun-img" />
            <a href="/" className="home-button">
                <img src={HomeButton} alt="Home" className="home-icon" />
            </a>
        </div>

    );
}

export default Sun;
