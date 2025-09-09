import React, { useState, useEffect } from "react";
import "../styles/events.css";

import TitleCardBackground from "../assets/events/eventVolleyball.png";
import FutureEvent from "../assets/events/futureEvent.png";

// helpers
import { Post } from "./helpers/eventsHelpers";
import usePageTracking from "../components/Common/TrafficTracker";

// calendar info
const calendarId =
  "c_3e3bac86e0f1dd70db73d31f7f2b024ea08ca141e7686840b4690786a34c0436@group.calendar.google.com";
const apiKey = "AIzaSyAwKJsagVX-8EzWQlN96wLXrpguEJu7auk";

function formatEventDate(event) {
  const isAllDay = !!event.start.date;

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
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
      return { date: dateFormatter.format(startDate), time: "All day" };
    } else {
      return {
        date: `${dateFormatter.format(startDate)} – ${dateFormatter.format(realEnd)}`,
        time: "All day",
      };
    }
  } else {
    const startDate = new Date(event.start.dateTime);
    const endDate = new Date(event.end.dateTime);

    if (startDate.toDateString() === endDate.toDateString()) {
      return {
        date: dateTimeFormatter.format(startDate),
        time: `${timeFormatter.format(startDate)} – ${timeFormatter.format(endDate)}`,
      };
    } else {
      return {
        date: `${dateTimeFormatter.format(startDate)} – ${dateTimeFormatter.format(endDate)}`,
        time: `${timeFormatter.format(startDate)} – ${timeFormatter.format(endDate)}`,
      };
    }
  }
}

const Events = () => {
  usePageTracking("Events Page");

  const [eventTitleData, setEventTitleData] = useState([]);
  const [eventDateData, setEventDateData] = useState([]);
  const [eventLocationData, setEventLocationData] = useState([]);
  const [eventDescriptionData, setEventDescriptionData] = useState([]);
  const [eventTimeData, setEventTimeData] = useState([]);
  const [eventImageData, setEventImageData] = useState([]);

  // helper: check valid URL and handle Google Drive links
  const processImageUrl = (str) => {
    if (!str) return "";
    try {
      const url = new URL(str);
      // convert Google Drive share link to direct image link
      if (url.hostname.includes("drive.google.com")) {
        const match = url.pathname.match(/\/d\/(.*?)(?:\/|$)/);
        if (match && match[1]) {
          return `https://drive.google.com/uc?export=view&id=${match[1]}`;
        }
      }
      return str;
    } catch (_) {
      return "";
    }
  };

  useEffect(() => {
    async function fetchUpcomingEvents() {
      const timeMin = new Date().toISOString();

      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        calendarId
      )}/events?key=${apiKey}&singleEvents=true&orderBy=startTime&timeMin=${timeMin}&maxResults=5`;

      const res = await fetch(url);
      const data = await res.json();

      const titles = [];
      const dates = [];
      const times = [];
      const locations = [];
      const descriptions = [];
      const images = [];

      data.items.forEach((event) => {
        const title = event.summary || "No title";
        const { date, time } = formatEventDate(event);
        const location = event.location || "No location provided";

        if (event.description) {
          const parts = event.description.split(",");
          const desc = parts.slice(0, -1).join(",").trim();
          const imgCandidate = parts[parts.length - 1]?.trim() || "";

          descriptions.push(desc || "No description provided");
          images.push(processImageUrl(imgCandidate));
        } else {
          descriptions.push("No description provided");
          images.push("");
        }

        titles.push(title);
        dates.push(date);
        times.push(time);
        locations.push(location);

        console.log("📅 " + title);
        console.log("   " + date);
        console.log("   ⏰ " + time);
        console.log("   📍 " + location);
        console.log("   📝 " + descriptions[descriptions.length - 1]);
        console.log("   🖼️ " + images[images.length - 1]);
        console.log("---------------------------");
      });

      setEventTitleData(titles);
      setEventDateData(dates);
      setEventTimeData(times);
      setEventLocationData(locations);
      setEventDescriptionData(descriptions);
      setEventImageData(images);
    }

    fetchUpcomingEvents();
  }, []);

  return (
    <>
      <div
        className="eventTitleCard"
        style={{ backgroundImage: `url(${TitleCardBackground})` }}
      >
        <div className="eventColorOverlay" />
        <h1>EVENTS</h1>
      </div>
      <div className="eventPostList">
        <h1>What's Next?</h1>
        <h3>Read about our future events!</h3>
        <div className="postWrapper">
          {eventTitleData.map((title, i) => (
            <Post
              key={i}
              image={/*eventImageData[i] ||*/ FutureEvent}
              eventMonth={eventDateData[i]}
              eventDay={eventDateData[i]}
              eventTime={eventTimeData[i]}
              eventLocation={eventLocationData[i]}
              postTitle={title}
              postDesc={eventDescriptionData[i]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;

