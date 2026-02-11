import { useState } from "react";
import "../../styles/eboard.css";
import { ColorLinkedinIcon } from "../../components/Common/Icon";

export const DescriptionCard = props => {
    const [open, setOpen] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

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

    return (
        <div className="eboardCard">
            <div className="eboardCardInformation">
                <h1 style={{ lineHeight: 0.9}}>{intro}</h1>
                <p>{major}</p>

                <h2>{q1}</h2>
                <p style={{ whiteSpace: "pre-line" }}>{a1}</p>
                <p>{webmasterthing}</p>
                <ColorLinkedinIcon
                    link={linkedin}
                />
            </div>

            <div
                className={`eboardCardPortrait ${imageLoaded ? 'loaded' : 'loading'}`}
                style={{ backgroundImage: `url(${image})` }}
            >
                {/* Hidden img element to track loading */}
                <img 
                    src={image} 
                    alt="" 
                    style={{ display: 'none' }}
                    onLoad={() => setImageLoaded(true)}
                />
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