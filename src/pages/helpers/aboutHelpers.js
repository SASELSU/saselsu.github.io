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
            <div className="historyCardBlurb">
                <p>{cardBlurb}</p>
            </div>
        </div>
    );
}

export const EBoardCard = (props) => {
    const {
        image,
        name,
        title
    } = props;
    return (
        <div className="aboutEBoardCard">
            <img src={image} alt="EBoardImage"/>
            <div className="aboutEboardCardText">
                <h1>{title}</h1>
                <p>{name}</p>
            </div>

        </div>
    );
}
