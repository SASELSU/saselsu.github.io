import {React, useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

function initialiseAnalytics() {
    const TRACKING_ID = process.env.REACT_APP_GA_ID;
    ReactGA.initialize(TRACKING_ID);
}
  
export default function usePageTracking() { //https://stackoverflow.com/questions/48347617/how-to-track-pageviews-on-react
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);
  
    useEffect(() => {
      initialiseAnalytics();
      setInitialized(true);
    }, []);
  
    useEffect(() => {
      if (initialized) {
        ReactGA.pageview(location.pathname + location.search);
      }
    }, [initialized, location]);
  }