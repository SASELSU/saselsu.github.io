import { React, useState } from "react"
import "../../styles/eboard.css"

export const DescriptionCard = (props) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const {
        title,
        name,
        major,
        image,
        blurb
    } = props;

    //onClick={handleOpen}
    return (
        <div className="eboardCardWrapper">
            <div className="eboardCard" > 
                <h2>{title}</h2>
                <img src={image} alt="officer pic"/>
                <h1>{name}</h1>

                
                <p>{major}</p>
                <div className={`eboardCardMore ${open? 'active' : 'inactive'}`}>
                    <p>{blurb}</p>
                </div>
            </div>
        </div>
    );
}