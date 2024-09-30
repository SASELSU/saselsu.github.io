import {
    React,
    useState
} from "react";
import "./hackathonPostcard.css"
import "./hackathonChecklist.css"
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
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const {
        title,
        paragraph
    } = props;
    return (
        <>
        <div className={"checklistCard"}>
            <button onClick={handleOpen}>{title}</button>
            {open ? (
                <div className="checklistCardOpen">
                    <p>{paragraph}</p>
                </div>
            ): null}
        </div>
        </>
    );
}