import React from "react";
import "../../styles/gallery.css";

export const GalleryCard = props => {
    const {
        image,
        link,
        title,
        date
    } = props;
    return (
        <>
            <div className="galleryCardWrapper">

                <a href={link} target="_blank" rel="noreferrer">
                    <div
                        className="galleryCard"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                </a>
                <div className="galleryCardText">
                    <h2>{date}</h2>
                    <h1>{title}</h1>
                </div>

            </div>
        </>
    );
};
