import React, { useEffect, useState } from "react";
import "../styles/gallery.css";

import Backdrop from "../assets/gallery/galleryBackdrop.png";
import { GalleryCard } from "./helpers/galleryHelpers";

/* fall 24 */
import Quinlan from "../assets/gallery/fall24/quinlan.jpg";

import usePageTracking from "../components/Common/TrafficTracker";

// calendar info
const calendarId
    = "c_3e3bac86e0f1dd70db73d31f7f2b024ea08ca141e7686840b4690786a34c0436@group.calendar.google.com";
const apiKey = "AIzaSyAwKJsagVX-8EzWQlN96wLXrpguEJu7auk";

/// / HELPER FUNCTIONS
// splits apart date and time into two separate entities
// TODO: type this properly.
function formatEventDate (event: any): Record<"date" | "time", string> {
    const isAllDay = !!event.start.date;

    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric"
    });

    const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric"
    });

    const timeFormatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit"
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
                date: `${dateFormatter.format(startDate)} - ${dateFormatter.format(realEnd)}`,
                time: "All day"
            };
        }
    } else {
        const startDate = new Date(event.start.dateTime);
        const endDate = new Date(event.end.dateTime);

        if (startDate.toDateString() === endDate.toDateString()) {
            return {
                date: dateTimeFormatter.format(startDate),
                time: `${timeFormatter.format(startDate)} - ${timeFormatter.format(endDate)}`
            };
        } else {
            return {
                date: `${dateTimeFormatter.format(startDate)} - ${dateTimeFormatter.format(endDate)}`,
                time: `${timeFormatter.format(startDate)} - ${timeFormatter.format(endDate)}`
            };
        }
    }
}

//TODO: add a way to filter to get events from a specific semester
//TODO: add events to google calendar from way back (and I mean wayyy back)
const Gallery = () => {
  usePageTracking("Gallery Page");

  const [events, setEvents] = useState([]);
  
      // display information fetched from the Google Calendar
      // activates when page first loads, if there are changes, user must reload the page
      useEffect(() => {
          async function fetchUpcomingEvents () {
              const timeMin = new Date().toISOString();
  
              const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
                  calendarId
              )}/events?key=${apiKey}&singleEvents=true&orderBy=startTime&timeMin=${timeMin}&maxResults=5`;
  
              const res = await fetch(url);
              const data = await res.json();
  
              const eventList = data.items.map(event => {
                  const title = event.summary || "No title";
                  const { date, time } = formatEventDate(event);
                  const location = event.location || "No location provided";
  
                  let desc = "No description provided";
                  let imgUrl = "";
                  let galleryUrl = "";
  
                  if (event.description) {
                      const parts = event.description.split(",");
                      desc = parts[0]?.trim() || "No description provided";
  
                      let imgCandidate = parts[1]?.trim() || "";
                      const match = imgCandidate.match(/href="([^"]+)"/);
                      if (match?.[1]) {
                          imgCandidate = match[1];
                      }
                      imgUrl = imgCandidate;

                      let galleryLink = parts[2]?.trim() || "";
                      const matchGallery = galleryLink.match(/href="([^"]+)"/);
                      if (matchGallery?.[1]) {
                          galleryLink = matchGallery[1];
                      }
                      galleryUrl = galleryLink
                  }
  
                  return {
                      title,
                      date,
                      time,
                      location,
                      description: desc,
                      image: imgUrl,
                      gallery: galleryUrl
                  };
              });
  
              setEvents(eventList);
  
              // console debug
              console.log("Fetched events:", eventList);
          }
  
          void fetchUpcomingEvents();
      }, []);
  return (
    <>
      <div
        className="galleryTitleCard"
        style={{ backgroundImage: `url(${Backdrop})` }}
      >
        <div className="galleryColorOverlay" />
        <h1>GALLERY</h1>
      </div>

      <div className="gallery">
        <h1>Fall 24'</h1>
        <div className="galleryCardContainer">
          {events.map((ev, i) => (
            <GalleryCard
              key={i}
              image={ev.image}
              title={ev.title}
              date={ev.date}
              link={ev.gallery}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
