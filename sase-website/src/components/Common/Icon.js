import React from "react";
import "../CommonStyles/Icon.css"

const Icon = (props) => {
    const {
        image,
        link,
    } = props;

    return (
        <div className="icon">
            <a href={link} target="_blank">                
                <img src={image}/>
            </a>
        </div>
    )
}
export default Icon;