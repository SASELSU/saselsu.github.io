import { React, useState } from 'react'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom';
import Collapse from "@mui/material/Collapse";
import "./hackathonNav.css"

import Pullout from "../assets/about/frontArrow.png"
import Home from "../assets/Home.png"

export const HackathonNav = () => {
    const [menuShow, setMenuShow] = useState(false);
    
    const handleToggleMenu = () => {
        setMenuShow(!menuShow);
    }
    
    return (
        <>
            <div className="hackathonNav">
            <Collapse orientation="horizontal" in={menuShow} easing={{enter: "ease-in", exit: "ease-out"}}>
                <div className='hackathonNavBar'>
                    <Link
                    activeClass="active" 
                    to="hackathonTitleCard"
                    spy={true}
                    smooth={true}><h1>HOME</h1></Link>
                    <Link
                    to="hackathonAbout"
                    spy={true}
                    smooth={true}><h1>ABOUT</h1></Link>
                    <Link
                    to="hackathonSignUp"
                    spy={true}
                    smooth={true}><h1>SIGN UP</h1></Link>
                    <Link
                    to="hackathonFAQ"
                    spy={true}
                    smooth={true}><h1>FAQ</h1></Link>
                    <Link
                    to="hackathonSponsors"
                    spy={true}
                    smooth={true}><h1>SPONSORS</h1></Link>
                </div>
            </Collapse>
            <img src={Pullout}
            onClick={() => handleToggleMenu()}/>
            </div>
            <RouterLink className="hackathonHomeButton" to='/'>
                <img src={Home} />
            </RouterLink>  
        </>


    );
}