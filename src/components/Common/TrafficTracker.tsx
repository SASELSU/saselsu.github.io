import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import ReactGA from "react-ga4";

function initializeAnalytics () {
    ReactGA.initialize(import.meta.env.VITE_REACT_APP_GA_ID);
};

/**
 * Track some data.
 * @param title The title of the page.
 * @link https://stackoverflow.com/questions/48347617/how-to-track-pageviews-on-react
 */
export default function usePageTracking (title: string): void {
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        initializeAnalytics();
        setInitialized(true);
    });

    useEffect(() => {
        initialized && ReactGA.send({
            hitType: "pageview",
            page: window.location.pathname,
            title
        });
    }, [initialized, location, title]);
}
