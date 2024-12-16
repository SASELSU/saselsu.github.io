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
        <div className="eboardCard" 
        style={{backgroundImage: `url(${image})`}}> 
            <div className="eboardCardBorder">
                <div className="eboardCardText">
                    <h1>{title}</h1>
                    <p>{name}</p>

                </div>
            </div>
        </div>
    );      
// <p>{major}</p>
// <div className={`eboardCardMore ${open? 'active' : 'inactive'}`}>
//     <p>{blurb}</p>
// </div> 
}