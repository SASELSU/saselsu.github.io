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
                        title="Hackathon"
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
                </div>
                <div className="navMenuPageContainer">

                    <Link to="/gallery"> Gallery </Link>
                </div>
                <p>Links</p>
                <div className="navMenuLinkContainer">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeA_kO3N-GTOMnouhRn2KbhGrWQXLfV3ZSCyDVIBEeLVhVzgw/viewform?usp=sf_link" target="_blank">                
                        Membership
                    </a>
                    <a href="https://lsu.prevent.zone" target="_blank">                
                        Hazing
                    </a>

                </div>
                <div className="navMenuLinkContainer">
                    <a href="https://forms.gle/P8ZKSaZb7uubsy856" target="_blank">                
                        SASE Nationals Interest
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
                <div className="navbar-logo">
                    <Link to='/'>
                        <img src={Logo} />
                    </Link>    
                </div>
                <div className="navbar-elements">
                    <div className="navbarElementsLink">
                    <Link to="/about"> About </Link>
                    <Link to="/events"> Events </Link>
                    </div>

                    <img src={MenuButton}
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