import {
    React, 
    useState
} from "react";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import "./Navbar.css";

import Logo from "../../assets/icons/white-sase-logo.png";
import MenuButton from "../../assets/icons/menuButton.png";

import AboutCard from "../../assets/navbar/navMenuAbout.png"
import EventsCard from "../../assets/navbar/navMenuEvents.jpeg"

const NavMenu = () => {
    return (
        <div className="navMenu">
            <div className="navMenuCardContainer">
                <div className="navMenuBigCard"
                    style={{backgroundImage: `url(${AboutCard})`}}
                >
                    <h1>ABOUT US</h1>
                </div>
                <div className="navMenuSmallCardContainer">
                    <div className="navMenuSmallCard"
                        style={{backgroundImage: `url(${EventsCard})`}}
                    >
                        <h1>EVENTS</h1>
                    </div>
                    <div className="navMenuSmallCard"
                        style={{backgroundImage: `url(${EventsCard})`}}
                    >
                        <h1>EVENTS</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Navbar = () => {
    const [menuShow, setMenuShow] = useState(false);

    const handleToggleMenu = () => {
        setMenuShow(!menuShow);
    }
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to='/'>
                        <img src={Logo} />
                    </Link>    
                </div>
                <div className="navbar-elements">
                    <Link to="/about"> About </Link>
                    <Link to="/events"> Events </Link>
                    <img src={MenuButton}
                    onClick={() => handleToggleMenu()}/>
                </div>
            </nav>
            <div className="navMenuContainer"> 
                <Collapse in={menuShow} easing={{enter: "ease-in", exit: "ease-out"}}> 
                    <NavMenu/>
                </Collapse>
            </div>



        </>
    );
};

export default Navbar;