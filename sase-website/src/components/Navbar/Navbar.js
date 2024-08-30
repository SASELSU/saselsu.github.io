import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import Logo from "../../assets/icons/white-sase-logo.png";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [bottom, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu =() => setClick(false);

    
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
                    <Link to="/forms"> Forms </Link>
                    <Link to="/contact"> Contact </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;