import React from "react";
import "../../styles/events.css"

//contains the actual post objects

export const Post = (props) => {
    const {
        image,
        eventDate,
        postTitle,
        postDesc,
    } = props;
    return (
        <div className="eventPost">
            <img src={image}/>
            <div className="eventPostInfo">
                <div className="eventPostHeader">
                    <h1>{postTitle}</h1>
                    <p>{eventDate}</p>
                </div>
                <p>{postDesc}</p>
            </div>
        </div>
    );
}

export const UpcomingPost = (props) => {
    const {
        image,
        eventDate,
        postTitle,
        postDesc,
    } = props;
    return (
        <div className="eventUpPost">
            <img src={image}/>
            <div className="eventUpPostInfo">
                <div className="eventUpPostHeader">
                    <h1>{postTitle}</h1>
                    <p>{eventDate}</p>
                </div>

                <p>{postDesc}</p>
            </div>
        </div>
    );
}
