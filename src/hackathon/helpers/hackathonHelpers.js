import {
    React,
    useState
} from "react";
import "./hackathonPostcard.css"
import "./hackathonChecklist.css"
export const Postcard = (props) => {
    const {
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
            {/* <div className={`checklistCardOpen`}>
                <p>{paragraph}</p>
            </div> */}
            <div className={`checklistCardOpen ${open? 'active' : 'inactive'}`}>
                <p>{paragraph}</p>
            </div>
        </div>
        </>
    );
}