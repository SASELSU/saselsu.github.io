import React from "react";
import "../styles/events.css"

import TitleCardBackground from "../assets/events/eventVolleyball.png"
import FutureEvent from "../assets/events/futureEvent.png"

//event images
import Exxon from "../assets/events/fall-2024/MOCK INTERVIEWS"
import ResumeBooklet from "../assets/events/fall-2024/ResumeBooklet.jpg"
import Giveback from "../assets/events/fall-2024/Giveback Night.png"
import GeauxGirls from "../assets/events/fall-2024/Geaux Girls STEM.png"
//helpers
import {
    Post,
    UpcomingPost,
} from "./helpers/eventsHelpers"

const Events = () => {
    return (
        <>
        <div className="eventTitleCard"
            style={{backgroundImage: `url(${TitleCardBackground})`}}
        >
            <div className="eventColorOverlay"/>
            <h1>EVENTS</h1>
        </div>
        <div className="eventPostList">
            <h1>What's Next?</h1> 
            <h3>Read about our future events!</h3>

            <div className="postContainer"> {/*something something more manual input*/}

                <Post
                    image={Giveback}
                    eventMonth="OCT 2024"
                    eventDay="4"
                    eventTime="11:00am-8:00pm"
                    eventLocation="7584 Bluebonnet Blvd"
                    postTitle="Kung Fu Tea Giveback"
                    postDesc="It's time for our KFT Giveback Night! Order some Boba and mention us!"
                />
                <Post
                    image={GeauxGirls}
                    eventMonth="OCT 2024"
                    eventDay="5"
                    eventTime="10:00am-12:00pm"
                    eventLocation="720 Terrace Ave"
                    postTitle="Geaux Girls"
                    postDesc="Come and help Geaux Girls STEM set up and run their development workshop! Sign ups are on Discord."
                />
                {/* <Post //never remove (this is the future event)
                image={FutureEvent}
                eventMonth="Some Month!"
                eventDay="xx"
                eventTime="Eventually!"
                eventLocation="Some Location!"
                postTitle="Future Event"
                postDesc="Our officers are currently formulating a new event! Either that or you're reading this page during the summer. Check back soon! "
                /> */}
                {/* uncomment above if theres no events */}
            </div>
            {/* <Post
                    image={ExxonMock}
                    eventMonth="SEPT 2024"
                    eventDay="10"
                    eventTime="6:00pm-7:30pm"
                    eventLocation="PFT 1200"
                    postTitle="Exxon Mock Interviews"
                    postDesc="🗣️ Get some final practice with your professional skills before the Career Fair! Feel free to also bring your resumes for a fresh set of eyes 👀 📎 "
                /> */}
            <div className="postContainer">

            </div>
        </div>
        </>
    )
}

export default Events;