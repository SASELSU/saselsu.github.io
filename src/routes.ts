import {
    type RouteConfig,
    index,
    route
} from "@react-router/dev/routes";

export default [
    index("./pages/Home.tsx"),

    route("about", "./pages/About.tsx"),
    route("eboard", "./pages/Eboard.tsx"),
    route("events", "./pages/Events.tsx"),
    route("byebyefaris", "./pages/Faris.tsx"),
    route("gallery", "./pages/Gallery.tsx"),
    route("join", "./pages/Join.tsx"),
    route("sponsors", "./pages/Sponsors.tsx"),

    // Pages in questionable locations
    route("hackathon", "./hackathon/hackathon.jsx")
] satisfies RouteConfig;
