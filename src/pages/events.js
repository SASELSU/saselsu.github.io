import React from "react";
import "../styles/events.css"

import TitleCardBackground from "../assets/events/eventVolleyball.png"
import FutureEvent from "../assets/events/futureEvent.png"

//event images
import BobaSocial from "../assets/events/fall-2024/GBM1-Fall-2024.png"
// import MockInterview from "../assets/events/fall-2024/mock-interviews.png"
import BloodDrive from "../assets/events/fall-2024/24BloodDrive.png"
import ResumeBooklet from "../assets/events/fall-2024/ResumeBooklet.jpg"
import GeauxGirls from "../assets/events/fall-2024/Geaux Girls STEM.png"
import CatHaven from "../assets/events/fall-2024/Cat Haven.png"
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
                    image={BloodDrive}
                    eventMonth="SEPT 2024"
                    eventDay="26"
                    eventTime="9:00am-4:00pm"
                    eventLocation="LSU Union 310"
                    postTitle="Blood Drive"
                    postDesc="Come to the Student Union to donate your blood! Donors will be given a free FIGHT CANCER shirt! Sign up with the QR code."
                />
                <Post
                    image={CatHaven}
                    eventMonth="SEPT 2024"
                    eventDay="29"
                    eventTime="10:00am-12:00pm"
                    eventLocation="Cat Haven"
                    postTitle="Cat Haven"
                    postDesc="ALL SPOTS FILLED!! Come and volunteer at Cat Haven! You'll be caring after and playing with cats waiting to be adopted!"
                />

                <Post
                    image={ResumeBooklet}
                    eventMonth="SEPT 2024"
                    eventDay="30"
                    eventTime="Due 11:59 PM"
                    eventLocation="SASE Discord"
                    postTitle="Resume Booklet"
                    postDesc="For SASE Nationals Attendees Only. Submit your resume to be judged by companies at SASE National Convention!"
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
            <Post
                    image={GeauxGirls}
                    eventMonth="OCT 2024"
                    eventDay="5"
                    eventTime="10:00am-12:00pm"
                    eventLocation="720 Terrace Ave"
                    postTitle="Geaux Girls"
                    postDesc="Come and help Geaux Girls STEM set up and run their development workshop! Sign ups are on Discord."
                />
            </div>
        </div>
        </>
    )
}

export default Events;