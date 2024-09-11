import React from "react";
import "../../styles/gallery.css"

export const GalleryCard = (props) => {
    const {
        image,
        link,
        title
    } = props;
    return (
        <>
        <div className="galleryCardWrapper">

        <a href={link} target="_blank"> 
            <div className="galleryCard"
            style={{backgroundImage: `url(${image})`}}/>
        </a>
        <h1>{title}</h1>

        </div>
        </>
    );
}