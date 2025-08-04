import {
    React,
    useState
} from "react";
import GreenDiv from "./components/greenDiv";
import Collapsible from "./components/collapsible";
import CoolButton from "./components/coolButton"
import SASEIcon from "./assets/SASElogo_forCoolButton.png"
import SASETree from "./assets/SASEtreeV4.svg"
import "./hackathon.css"
//#7abbb8ff

import usePageTracking from "../components/Common/TrafficTracker";

const Hackathon = () => {
    usePageTracking("Hackathon Page");

    const greenCollapsibleContent = [
        {
            id: 1,
            label: "What is GeauxHack?",
            renderContent: () => ("Spanning forty hours over the course of three days, groups of two - five people will create a project based on this year's theme. Contrary to the name, no hacking is involved, but rather focuses on software development."),
        },
        {
            id: 2,
            label: "What is this year's theme?",
            renderContent: () => ("The theme this year concerns the concept of nature. The specific prompt(s) for this hackathon will be released on the first day of the event."),
        },
        {
            id: 3,
            label: "Who can go?",
            renderContent: () => ("GeauxHack accepts participants of any skill level so long as they are high school or college students!"),
        },
        {
            id: 4,
            label: "I'm new to programming, should I join?",
            renderContent: () => ("Of course you should! Participants will be categorized into two brackets (Beginner and Intermediate) based on skill level, so no need to worry about biting off more than you can chew!"),
        },
        {
            id: 5,
            label: "What should I bring?",
            renderContent: () => ("The bare minimum needed is something to code with. Deoderant also wouldn't hurt."),
        },
        {
            id: 6,
            label: "What can I make?",
            renderContent: () => ("There are no banned languages. Create anything you want, so long as you have fun!"),
        },
        {
            id: 7,
            label: "Is there free stuff?",
            renderContent: () => ("Yes, there will be free food served throughout the duration of the event. On the last day of the hackathon, free shirts to commeorate the event will be distributed."),
        },
        {
            id: 8,
            label: "I have a question but it is not answered here",
            renderContent: () => ("I guess it is not a frequently asked one then. If you would like to get it answered, please email lsu@saseconnect.org."),
        },
    ]
    return (
        <>
            <div className="theDivToRuleAllDivs" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'column', backgroundColor: '#34b6afff', height: '100vh', width: '100%'}}>
                <img src={SASETree} style={{height: '100vh'}}></img>
            </div>
            <div className="theDivToRuleAllDivs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#7abb83' }}>
                <GreenDiv
                    title={'About'}
                    content={'Welcome to SASE LSU\'s 4th annual hackathon! Brace yourself for three days of collaborating, programming, and other shenanigans. Each year, 100+ participants spend forty hours making a program to fit the prompt for the year. Participants of all skill levels in high school or college are allowed to participate, so please do not hesitate to join GeauxHack!'} />
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