import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

export const BigCard = (props) => {
    const {
        image,
        title,
        link
    } = props;
    return (
        <>
        <div className="navMenuBigCardWrapper">

            <Link to={link}>
                
            <div className="navMenuBigCard"
                style={{backgroundImage: `url(${image})`}}
            >

            </div>

            </Link>
            <h1>{title}</h1>

        </div>
        </>
    )
}

export const SmallCard = (props) => {
    const {
        image,
        title,
        subtitle,
        link
    } = props;
    return (
        <>
        <div className="navMenuSmallCardWrapper">
            <Link to={link}>
                <div className="navMenuSmallCard"
                    style={{backgroundImage: `url(${image})`}}
                />
            </Link>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>

        </>
    )
}