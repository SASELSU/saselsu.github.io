import { useState } from "react";
import "../../styles/eboard.css";
import { ColorLinkedinIcon } from "../../components/Common/Icon";

export const DescriptionCard = props => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const {
        intro,
        title,
        name,
        major,
        image,
        q1,
        a1,
        linkedin,
        webmasterthing
    } = props;

    // onClick={handleOpen}
    // style={{backgroundImage: `url(${image})`}}
    return (
        <div className="eboardCard">
            <div className="eboardCardInformation">
                <h1>{intro}</h1>
                <p>{major}</p>

                <h2>{q1}</h2>
                <p>{a1}</p>
                <p>{webmasterthing}</p>
                <ColorLinkedinIcon
                    link={linkedin}
                />
            </div>

            <div
                className="eboardCardPortrait"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="eboardCardBorder">
                    <div className="eboardCardText">
                        <h1>{title}</h1>
                        <p>{name}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};
