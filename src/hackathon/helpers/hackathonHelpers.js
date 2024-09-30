import {
    React,
    // useState
} from "react";
import "./hackathonPostcard.css"
import BackBackdrop from "../assets/about/postcardBack.jpeg"
export const Postcard = (props) => {
    const {
        title,
        cardImage,
        cardBackImage
    } = props;

    return (
        <div className="flipCard">
            <div className="cardContent">
                <div className="cardFront"
                    style={{backgroundImage: `url(${cardImage})`}}
                >
                </div>
                <div className="cardBack"
                    style={{backgroundImage: `url(${cardBackImage})`}}
                >
                </div>
            </div>

        </div>
    );
}

export const ChecklistCard = (props) => {
    return (
        <>
        <div className="checklistCard">
hello
        </div>
        </>
    );
}