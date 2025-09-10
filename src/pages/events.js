//// IMPORTS
import { useState, useEffect } from "react";
import "../styles/events.css";
// images
import TitleCardBackground from "../assets/events/eventVolleyball.png";
import FutureEvent from "../assets/events/futureEvent.png";
// helpers
import { Post } from "./helpers/eventsHelpers";
import usePageTracking from "../components/Common/TrafficTracker";
// calendar info
const calendarId =
  "c_3e3bac86e0f1dd70db73d31f7f2b024ea08ca141e7686840b4690786a34c0436@group.calendar.google.com";
const apiKey = "AIzaSyAwKJsagVX-8EzWQlN96wLXrpguEJu7auk";

//// HELPER FUNCTIONS
// splits apart date and time into two separate entities
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
    const endStr = event.end.date;

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

//// PAGE CONTENT
const Events = () => {
  usePageTracking("Events Page");

  const [events, setEvents] = useState([]);

  // display information fetched from the Google Calendar
  // activates when page first loads, if there are changes, user must reload the page
  useEffect(() => {
    async function fetchUpcomingEvents() {
      const timeMin = new Date().toISOString();

      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        calendarId
      )}/events?key=${apiKey}&singleEvents=true&orderBy=startTime&timeMin=${timeMin}&maxResults=5`;

      const res = await fetch(url);
      const data = await res.json();

      const eventList = data.items.map((event) => {
        const title = event.summary || "No title";
        const { date, time } = formatEventDate(event);
        const location = event.location || "No location provided";

        let desc = "No description provided";
        let imgUrl = "";

        if (event.description) {
          const parts = event.description.split(",");
          desc = parts[0]?.trim() || "No description provided";

          let imgCandidate = parts[1]?.trim() || "";
          const match = imgCandidate.match(/href="([^"]+)"/);
          if (match && match[1]) {
            imgCandidate = match[1];
          }
          imgUrl = imgCandidate;
        }

        return {
          title,
          date,
          time,
          location,
          description: desc,
          image: imgUrl,
        };
      });

      setEvents(eventList);

      // console debug
      console.log("Fetched events:", eventList);
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
          {events.map((ev, i) => (
            <Post
              key={i}
              image={ev.image || FutureEvent}
              eventMonth={ev.date}
              eventDay={ev.date}
              eventTime={ev.time}
              eventLocation={ev.location}
              postTitle={ev.title}
              postDesc={ev.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
