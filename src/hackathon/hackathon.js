import {
    React,
    useState
} from "react";
import GreenDiv from "./components/greenDiv";
import Collapsible from "./components/collapsible";


import usePageTracking from "../components/Common/TrafficTracker";

const Hackathon = () => {
    usePageTracking("Hackathon Page");
    
    const greenCollapsibleContent = [
        {
            id: 1,
            label: "Is there free stuff?",
            renderContent: () => ("Yes, there will be free food served throughout the duration of the event. On the last day of the hackathon, free shirts to commeorate the event will be distributed."),
        },
        {
            id: 2,
            label: "Is there free stuff?",
            renderContent: () => ("Yes, there will be free food served throughout the duration of the event. On the last day of the hackathon, free shirts to commeorate the event will be distributed."),
        },
    ]
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <GreenDiv
                    title={'helena'}
                    content={'i study computer science and like cats. this is awesome'}>
                </GreenDiv>
                <GreenDiv
                    title={'steven'}
                    content={'he is dumb but he is my friend'}>
                </GreenDiv>
                <GreenDiv
                    title={'About'}
                    content={'Welcome to SASE LSU\'s 4th annual hackathon. '}>
                </GreenDiv>
                <GreenDiv
                    title={'Activities'}
                    content={'More information will be announced closer to the start of GeauxHack'}>
                </GreenDiv>
                <GreenDiv
                    title={'Workshops'}
                    content={'More information will be announced closer to the start of GeauxHack'}>
                </GreenDiv>
                <GreenDiv
                    title={'FAQs'}
                    content={'More information will be announced closer to the start of GeauxHack'}>
                </GreenDiv>
                <Collapsible items={greenCollapsibleContent} keepOthersOpen={true}>
                </Collapsible>
            </div>

        </>
    )
}

export default Hackathon;