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
            <img src={image}/>
            <div className="historyCardBlurb">
                {cardBlurb}
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
        <div className="eBoardCard">
            <img src={image}/>
            <h1>{title}</h1>
            <p>{name}</p>
        </div>
    );
}
