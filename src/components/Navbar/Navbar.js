import {
    React, 
    useState,
    useEffect
} from "react";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
    WhiteDiscordIcon,
    WhiteFacebookIcon,
    WhiteInstagramIcon
} from "../Common/Icon.js"
import { BigCard, SmallCard } from "./NavbarHelpers";
import "./Navbar.css";

import Logo from "../../assets/icons/white-sase-logo.png";
import MenuButton from "../../assets/icons/menuButton.png";

//card images
import AboutCard from "../../assets/navbar/navMenuAbout.png"
import EventsCard from "../../assets/navbar/navMenuEventsAlt.jpeg"
import HackathonCard from "../../assets/navbar/navMenuHackathon.jpeg"

const NavMenu = () => {
    return (
        <div className="navMenu">
            <div className="navMenuCardContainer">
                <BigCard 
                    image={AboutCard}
                    title="About Us"
                    link="/about"    
                />
                <div className="navMenuSmallCardContainer">
                    <SmallCard
                        image={HackathonCard}
                        title="GeauxHack"
                        link="/hackathon"
                    />
                    <SmallCard
                        image={EventsCard}
                        title="Events"
                        link="/events"
                    />
                </div>
            </div>
            <div className="navMenuTextContainer">
                <div className="navMenuPageContainer">
                    <Link to="/eboard"> EBoard </Link>
                    <Link to="/sponsors"> Sponsors </Link>
                    <Link to="/gallery"> Gallery </Link>
                    <Link to="/join"> Join Us </Link>
                </div>
                <p>Links</p>
                <div className="navMenuLinkContainer">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeA_kO3N-GTOMnouhRn2KbhGrWQXLfV3ZSCyDVIBEeLVhVzgw/viewform?usp=sf_link" target="_blank" rel="noreferrer">                
                        Membership
                    </a>
                    <a href="https://lsu.prevent.zone" target="_blank" rel="noreferrer">                
                        Hazing
                    </a>
                </div>
                <div className="navMenuIconContainer">
                    <WhiteDiscordIcon/>
                    <WhiteFacebookIcon/>
                    <WhiteInstagramIcon/>
                </div>
            </div>
        </div>
    )
}

const Navbar = () => {

    const [menuShow, setMenuShow] = useState(false);     


    const location = useLocation();
    useEffect(() => {
        setMenuShow(false);
    }, [location])

    if (location.pathname.localeCompare("/hackathon") === 0) {
      return (<div></div>);  
    }

    const handleToggleMenu = () => {
        setMenuShow(!menuShow);
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbarLogo">
                    <Link to='/'>
                        <img src={Logo} alt="SASELogo"/>
                    </Link>    
                </div>
                <div className="navbarElements">
                    <Link to="/about"> <h1>About</h1> </Link>
                    <Link to="/events"> <h1>Events</h1>  </Link>
                    <img src={MenuButton} alt="MenuButton"
                         onClick={() => handleToggleMenu()}/>
                </div>
            </nav>
            <div className="navMenuContainer"> 
                <Collapse in={menuShow} easing={{enter: "ease-in", exit: "ease-out"}}> 
                    <NavMenu
                    onClick={() => handleToggleMenu()}
                    />
                </Collapse>
            </div>
        </>
    );
};

export default Navbar;