import { React, useState } from "react"
import "../../styles/eboard.css"

export const DescriptionCard = (props) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const {
        name,
        major,
        image,
        blurb
    } = props;
    return (
        <>
            <div className="eboardCard" onClick={handleOpen}>
                <img src={image} alt="officer pic"/>
                <h1>{name}</h1>
                <h2>{major}</h2>
                <div className={`eboardCardMore ${open? 'active' : 'inactive'}`}>
                    <p>{blurb}</p>
                </div>
            </div>
        </>
    );
}