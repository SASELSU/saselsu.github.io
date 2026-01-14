import React, { useEffect, useState } from "react";
import "../styles/gallery.css";

import Backdrop from "../assets/gallery/galleryBackdrop.png";
import { GalleryCard } from "./helpers/galleryHelpers";

/* fall 24 */
import Quinlan from "../assets/gallery/fall24/quinlan.jpg";

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
  const [semester, setSemester] = useState("fall");
  const [semesterStart, setSemesterStart] = useState("");
  const [semesterEnd, setSemesterEnd] = useState("");
  const [year, setYear] = useState("2025");

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

  // display information fetched from the Google Calendar
  // activates when page first loads, if there are changes, user must reload the page
  /*useEffect(() => {
    async function fetchUpcomingEvents() {
      const timeMin = new Date().toISOString();

      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        calendarId
      )}/events?key=${apiKey}&singleEvents=true&orderBy=startTime&timeMin=${timeMin}&maxResults=5`;

      const res = await fetch(url);
      const data = await res.json();

      const eventList = data.items.map(
        (event: { summary: string; location: string; description: string }) => {
          const title = event.summary || "No title";
          const { date, time } = formatEventDate(event);
          const location = event.location || "No location provided";

          let desc = "No description provided";
          let imgUrl = "";
          let galleryUrl = "#";

          // uncomment when vincent updates the facebook page (take your time bro)
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
            galleryUrl = galleryLink;
          }

          return {
            title,
            date,
            time,
            location,
            description: desc,
            image: imgUrl,
            gallery: galleryUrl,
          };
        }
      );

      setEvents(eventList);

      // console debug
      console.log("Fetched events:", eventList);
    }

    void fetchUpcomingEvents();
  }, []);*/

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
        <div>
          <form onSubmit={handleSubmit}>
            {/* Semester dropdown */}
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="fall">fall</option>
              <option value="spring">spring</option>
            </select>

            {/* Year dropdown */}
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="galleryCardContainer">
          {/*<GalleryCard
              key={1}
              image={'https://scontent-dfw5-2.cdninstagram.com/v/t51.75761-15/488368746_18136706764394884_3088724195772795059_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzYxMDcxODYzMjk3MzYyMzgzNA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=GJd2jsrP2GUQ7kNvwFW-bPY&_nc_oc=AdklJjvN89w7JyBJbxnbzRFffyId8s_dpYJwIC6EuHVwgprmfRYjW2BDcE_BaxNef9V1UglD77s_Uye5UcrRUNI8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_gid=Wt2VgoRQAPGjXhJLLIPLZg&oh=00_AfYuYYDT4A_riuE79Q89VRaO5b6XZuhXN2qHbvgdbVqpig&oe=68E46512'}
              title={'Relax-SASE-tion'}
              date={'April 22nd'}
              link={'https://www.facebook.com/media/set/?set=a.1116871087135206&type=3'}
            />*/}
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
