import React from "react";
import "../styles/events.css"

import TitleCardBackground from "../assets/events/eventVolleyball.png"
// import FutureEvent from "../assets/events/futureEvent.png"

//event images
import FutureEvent from "../assets/events/futureEvent.png"
import Gambling from "../assets/events/spring-2025/Gambling.png"
import LiveDare from "../assets/events/spring-2025/Instagram live Dares.png"
import MainEvent from "../assets/events/spring-2025/Main Event Fun Cards Supporting.png"
import SecretValentine from "../assets/events/spring-2025/secret valentine flyer.png"





//helpers
import {
    Post,
    // UpcomingPost,
} from "./helpers/eventsHelpers"
import usePageTracking from "../components/Common/TrafficTracker";
import { forEach } from "underscore";

//placeholder
const calendarId = "c_3e3bac86e0f1dd70db73d31f7f2b024ea08ca141e7686840b4690786a34c0436@group.calendar.google.com"
const apiKey = "AIzaSyAwKJsagVX-8EzWQlN96wLXrpguEJu7auk"
var eventTitleData = []
var eventDateData = []
var eventLocationData = []
var eventDescriptionData = []

async function fetchUpcomingEvents() {

  const timeMin = new Date().toISOString();

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
    calendarId
  )}/events?key=${apiKey}&singleEvents=true&orderBy=startTime&timeMin=${timeMin}&maxResults=5`;

  const res = await fetch(url);
  const data = await res.json();

  data.items.forEach(event => {
    const title = event.summary || "No title";
    const dateRange = formatEventDate(event);
    const location = event.location || "No location provided";
    const description = event.description || "No description provided";

    eventTitleData.push(title)
    eventDateData.push(dateRange)
    eventLocationData.push(location)
    eventDescriptionData.push(description)


    console.log("📅 " + title);
    console.log("   " + dateRange);
    console.log("   📍 " + location);
    console.log("   📝 " + description);
    console.log("---------------------------");
  });
}


function formatEventDate(event) {
  const isAllDay = !!event.start.date;

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short", // add day of week
    month: "short",
    day: "numeric",
  });

  const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short", // add day of week
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  if (isAllDay) {
    const startStr = event.start.date;
    const endStr = event.end.date; // exclusive end

    const [startY, startM, startD] = startStr.split("-").map(Number);
    const [endY, endM, endD] = endStr.split("-").map(Number);

    const startDate = new Date(startY, startM - 1, startD);
    const realEnd = new Date(endY, endM - 1, endD - 1);

    if (startDate.getTime() === realEnd.getTime()) {
      return `${dateFormatter.format(startDate)} (All day)`;
    } else {
      return `${dateFormatter.format(startDate)} – ${dateFormatter.format(realEnd)}`;
    }
  } else {
    const startDate = new Date(event.start.dateTime);
    const endDate = new Date(event.end.dateTime);

    if (startDate.toDateString() === endDate.toDateString()) {
      return `${dateTimeFormatter.format(startDate)} – ${timeFormatter.format(endDate)}`;
    } else {
      return `${dateTimeFormatter.format(startDate)} – ${dateTimeFormatter.format(endDate)}`;
    }
  }
}




const Events = () => {
    usePageTracking("Events Page");


  fetchUpcomingEvents();

    for(let i = 0; i < eventTitleData.length; i++){
        return(
            <Post //never remove (this is the future event)
                image={FutureEvent}
                eventMonth={eventDateData[i]}
                eventDay={eventDateData[i]}
                eventTime={eventDateData[i]}
                eventLocation={eventLocationData[i]}
                postTitle={eventTitleData[i]}
                postDesc={eventDescriptionData[i]}
                />
        )
    }

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
            <div className="postContainer"> 
                
                {/*something something more manual input*/}

            
                {/* <Post //never remove (this is the future event)
                <div className="postContainer"> {/*something something more manual input*/}              
                {/*<Post //never remove (this is the future event)
                image={FutureEvent}
                eventMonth="Some Month!"
                eventDay="xx"
                eventTime="Eventually!"
                eventLocation="Some Location!"
                postTitle="Future Event"
                postDesc="Our officers are currently formulating a new event! Either that or you're reading this page during the summer or winter. Check back soon! "
                />
                {/* uncomment above if theres no events */}
            </div>
        </div>
        </>
    )
}

export default Events;