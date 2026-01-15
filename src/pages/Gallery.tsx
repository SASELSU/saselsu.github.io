// TODO: go all the way from 2019 and add events to the google calendar with the proper format
// (im not getting any help with this am i?)

import React, { useEffect, useState } from "react";
import "../styles/gallery.css";

import Backdrop from "../assets/gallery/galleryBackdrop.png";
import { GalleryCard } from "./helpers/galleryHelpers";

import usePageTracking from "../components/Common/TrafficTracker";

// calendar info
const calendarId =
  "c_3e3bac86e0f1dd70db73d31f7f2b024ea08ca141e7686840b4690786a34c0436@group.calendar.google.com";
const apiKey = "AIzaSyAwKJsagVX-8EzWQlN96wLXrpguEJu7auk";

/// / HELPER FUNCTIONS
// splits apart date and time into two separate entities
// TODO: type this properly.
function formatEventDate(event: any): Record<"date" | "time", string> {
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
        date: `${dateFormatter.format(startDate)} - ${dateFormatter.format(realEnd)}`,
        time: "All day",
      };
    }
  } else {
    const startDate = new Date(event.start.dateTime);
    const endDate = new Date(event.end.dateTime);

    if (startDate.toDateString() === endDate.toDateString()) {
      return {
        date: dateTimeFormatter.format(startDate),
        time: `${timeFormatter.format(startDate)} - ${timeFormatter.format(endDate)}`,
      };
    } else {
      return {
        date: `${dateTimeFormatter.format(startDate)} - ${dateTimeFormatter.format(endDate)}`,
        time: `${timeFormatter.format(startDate)} - ${timeFormatter.format(endDate)}`,
      };
    }
  }
}

//TODO: add a way to filter to get events from a specific semester
//TODO: add events to google calendar from way back (and I mean wayyy back)
const Gallery = () => {
  usePageTracking("Gallery Page");

  const [gallery, setGallery] = useState([]);
  const [semester, setSemester] = useState("spring");
  const [semesterStart, setSemesterStart] = useState("");
  const [semesterEnd, setSemesterEnd] = useState("");
  const [year, setYear] = useState("2026");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Semester:", semester);
    console.log("Year:", year);

    let semesterStart;
    let semesterEnd;

    if (semester === "fall") {
      semesterStart = "-08-03T10:00:00Z";
      semesterEnd = "-12-31T10:00:00Z";
    } else if (semester === "spring") {
      semesterStart = "-01-01T10:00:00Z";
      semesterEnd = "-07-31T10:00:00Z";
    }

    var timeMin = `${year}${semesterStart}`;
    var timeMax = `${year}${semesterEnd}`;
    console.log(`${timeMin} ${timeMax}`);

    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime&key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data.items);
    
    const galleryList = data.items.map(
        (gallery) => {
            
            const title = gallery.summary || "No title"
            const { date, time } = formatEventDate(gallery);
            var imgUrl = ""
            var galleryUrl = "#"
            

            if (gallery.description) {
            const parts = gallery.description.split(",");
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
            galleryUrl = galleryLink;
          }

          return{
            image: imgUrl,
            title,
            date,
            link: galleryUrl
          }
        }
    )
    setGallery(galleryList);
    console.log(galleryList);
  };

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
        <div style={{ width: "30%", margin: "auto", marginTop: "2.5%", marginBottom: "2.5%",  justifyContent: "center", alignItems: "center", padding: "1%", background: "white", borderRadius: "20px"}}>
            <p>Choose a semester to see photos from:</p>
          <form onSubmit={handleSubmit}>
            {/* Semester dropdown */}
            <label>Semester: </label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              style={{marginRight: "2%", border: "none", borderRadius: "5px", color: "white", background: "rgb(0, 78, 100)", fontFamily: "Bebas Neue", padding: "5px", paddingLeft: "10px", paddingRight: "10px"}}
            >
              <option value="fall">fall</option>
              <option value="spring">spring</option>
            </select>
            
            {/* Year dropdown */}
            {/* TODO: Make this automatically add a year every year*/}
            <label>Year: </label>
            <select value={year} style={{marginRight: "2%", border: "none", borderRadius: "5px", color: "white", background: "rgb(0, 78, 100)", fontFamily: "Bebas Neue", padding: "5px", paddingLeft: "10px", paddingRight: "10px"}} onChange={(e) => setYear(e.target.value)}>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>

            <button type="submit" style={{ border: "none", borderRadius: "5px", color: "white", background: "rgb(0, 78, 100)", fontFamily: "Bebas Neue", padding: "5px", paddingLeft: "10px", paddingRight: "10px"}}>Submit</button>
          </form>
        </div>
        <div className="galleryCardContainer">
          {gallery.map((gal, i) => (
            <GalleryCard
              key={i}
              image={gal.image}
              title={gal.title}
              date={gal.date}
              link={gal.gallery}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
