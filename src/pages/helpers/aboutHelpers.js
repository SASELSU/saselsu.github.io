import React from "react";
import "../../styles/about.css"

//contains the card objects

export const HistoryCard = (props) => {
    const {
        image,
        cardBlurb,
    } = props;
    return (
        <div className="historyCard">
            <img src={image} alt="historyImage"/>
            {/* <div className="historyCardBlurb">
                <p>{cardBlurb}</p>
            </div> */}
        </div>
    );
}