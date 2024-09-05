import React from "react";
import "../../styles/events.css"

//contains the actual post objects

export const Post = (props) => {
    const {
        image,
        eventMonth,
        eventDay,
        eventTime,
        eventLocation,
        postTitle,
        postDesc,
    } = props;
    return (
        <div className="eventPost">
            <div className="eventPostDateTimeLocation">
                <p>{eventMonth}</p>
                <h2>{eventDay}</h2>
                <p>{eventLocation}</p>
                <p>{eventTime}</p>
            </div>
            <div className="eventPostInfo">
                <h1>{postTitle}</h1>
                <p>{postDesc}</p>
            </div>
            <img src={image}/>

        </div>
    );
}

export const UpcomingPost = (props) => {
    const {
        image,
        eventDate,
        eventLocation,
        postTitle,
        postDesc,
    } = props;
    return (
        <div className="eventUpPost">
            <img src={image}/>
            <div className="eventUpPostInfo">
                <div className="eventUpPostHeader">
                    <h1>{postTitle}</h1>
                    {/* <div className="eventUpPostHeaderSubtext">
                        <p>{eventDate}</p>
                        <p>{eventLocation}</p>
                    </div> */}
                    <div>
                        <p>{eventDate}</p>
                        <p>{eventLocation}</p>
                    </div>
                </div>
                <p>{postDesc}</p>
            </div>
        </div>
    );
}
