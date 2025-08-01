import {
    React,
    useState
} from "react";
import GreenDiv from "./components/greenDiv";
import Collapsible from "./components/collapsible";
import "./hackathon.css"


import usePageTracking from "../components/Common/TrafficTracker";

const Hackathon = () => {
    usePageTracking("Hackathon Page");

    const greenCollapsibleContent = [
        {
            id: 1,
            label: "What is GeauxHack?",
            renderContent: () => ("Spanning forty hours over the course of three days, groups of two - five people will create a project that adheres to the announced theme. Contrary to the name, no hacking is involved, but rather focuses on software development."),
        },
        {
            id: 2,
            label: "What is this year's theme?",
            renderContent: () => ("The theme this year concerns nature."),
        },
        {
            id: 3,
            label: "Who can go?",
            renderContent: () => ("GeauxHack accepts participants of any skill level so long as they are high school or college students."),
        },
        {
            id: 4,
            label: "I'm new to programming, should I join?",
            renderContent: () => ("Please join. Participants will be categorized into two brackets (Beginner and Intermediate) based on skill level."),
        },
        {
            id: 5,
            label: "What should I bring?",
            renderContent: () => ("The bare minimum: something to code with. Deoderant also wouldn't hurt."),
        },
        {
            id: 6,
            label: "What can I make?",
            renderContent: () => ("There are no banned languages. Create anything you want."),
        },
        {
            id: 7,
            label: "Is there free stuff?",
            renderContent: () => ("Yes, there will be free food served throughout the duration of the event. On the last day of the hackathon, free shirts to commeorate the event will be distributed."),
        },
        {
            id: 8,
            label: "I have a question but it is not answered here",
            renderContent: () => ("I guess it is not a frequently asked one then. If you would like to get it answered, email lsu@saseconnect.org."),
        },
    ]
    return (
        <>
            <div className="theDivToRuleAllDivs"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#7abb83' }}>
                <GreenDiv
                    title={'About'}
                    content={'Welcome to SASE LSU\'s 4th annual hackathon. Placeholder...'} />
                <GreenDiv
                    title={'Activities'}
                    content={'More information will be announced closer to the start of GeauxHack.'} />
                <GreenDiv
                    title={'Workshops'}
                    content={'More information will be announced closer to the start of GeauxHack.'} />
                <GreenDiv
                    title={'Sign Up'}
                    content={'The sign up form will be opened during the school year.'} />
                <GreenDiv
                    title={'Frequently Asked Questions'}
                    content={<Collapsible items={greenCollapsibleContent} keepOthersOpen={false}>
                    </Collapsible>}
                />
                <GreenDiv
                    title={'Sponsors'}
                    content={'This section will be populated once sponsors have been finalized.'} />
            </div>

        </>
    )
}

export default Hackathon;