import {
    React, 
    useState
} from "react";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import Icon from "../Common/Icon"
import { BigCard, SmallCard } from "./NavbarHelpers";
import "./Navbar.css";

import Logo from "../../assets/icons/white-sase-logo.png";
import MenuButton from "../../assets/icons/menuButton.png";

//card images
import AboutCard from "../../assets/navbar/navMenuAbout.png"
import EventsCard from "../../assets/navbar/navMenuEvents.jpeg"
import HackathonCard from "../../assets/navbar/navMenuHackathon.jpeg"

//icon images
import discord from "../../assets/icons/social_media/discord.png"
import facebook from "../../assets/icons/social_media/facebook.png"
import instagram from "../../assets/icons/social_media/instagram.png"

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
                        subtitle="(coming soon)"
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
                    <Icon 
                        image={discord}
                        link="https://discord.com/invite/eAW5RZsKyk"
                    />
                    <Icon 
                        image={facebook}
                        link="https://www.facebook.com/lsu.sase/"
                    />
                    <Icon 
                        image={instagram}
                        link="https://www.instagram.com/saselsu/"
                    />
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