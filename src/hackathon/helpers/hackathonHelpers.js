import {
    React,
    // useState
} from "react";
import "./hackathonHelpers.css"
import BackBackdrop from "../assets/postcardBack.jpeg"
export const Postcard = (props) => {
    const {
        title,
        cardImage,
        text
    } = props;

    return (
        <div className="flipCard">
            <div className="cardContent">
                <div className="cardFront"
                    style={{backgroundImage: `url(${cardImage})`}}
                >
                </div>
                <div className="cardBack"
                    style={{backgroundImage: `url(${BackBackdrop})`}}
                >
                <div className="cardBackText">
                    <p>{text}</p>
                    <h1>{title}</h1>
                </div>

                </div>
            </div>

        </div>
    );
} 