import GreenDiv from "./greenDiv";
import Collapsible from "../collapsible/collapsible";
import Vine2D from "./vine2d";
import GDSC from "../../assets/logo/GDSC.png";
import SASE from "../../assets/logo/Sase.png";
import DirtCard from "./infoSquare";

const greenCollapsibleContent = [
    {
        id: 1,
        label: "What is GeauxHack?",
        renderContent: () => ("Spanning forty hours over the course of three days, groups of two - five people will create a project based on this year's theme. Contrary to the name, no hacking is involved, but rather focuses on software development.")
    },
    {
        id: 2,
        label: "What is this year's theme?",
        renderContent: () => ("The theme this year concerns the concept of nature. The specific prompt(s) for this hackathon will be released on the first day of the event.")
    },
    {
        id: 3,
        label: "Who can go?",
        renderContent: () => ("GeauxHack accepts participants of any skill level so long as they are high school or college students!")
    },
    {
        id: 4,
        label: "I'm new to programming, should I join?",
        renderContent: () => ("Of course you should! Participants will be categorized into two brackets (Beginner and Intermediate) based on skill level, so no need to worry about biting off more than you can chew!")
    },
    {
        id: 5,
        label: "What should I bring?",
        renderContent: () => ("The bare minimum needed is something to code with. Deoderant also wouldn't hurt.")
    },
    {
        id: 6,
        label: "What can I make?",
        renderContent: () => ("There are no banned languages. Create anything you want, so long as you have fun!")
    },
    {
        id: 7,
        label: "Is there free stuff?",
        renderContent: () => ("Yes, there will be free food served throughout the duration of the event. On the last day of the hackathon, free shirts to commeorate the event will be distributed.")
    },
    {
        id: 8,
        label: "I have a question but it is not answered here",
        renderContent: () => ("I guess it is not a frequently asked one then. If you would like to get it answered, please email lsu@saseconnect.org.")
    }
];
function InfoSection () {
    return (
        <div className="greenDivContainer">
            <div className="about-sec" style={{ width: "500px%", height: "550px", position: "relative", zIndex: 1 }}>
                <Vine2D />
                <a href="http://gdsclsu.org/" target="_blank" rel="noopener noreferrer">
                    <img src={GDSC} alt="GDSC LSU logo" className="left-logo" />
                </a>
                <a href="https://www.saselsu.org/" target="_blank" rel="noopener noreferrer">
                    <img src={SASE} alt="SASE LSU logo" className="right-logo" />
                </a>
                <div className="about"> About </div>
                <div className="about-description">Welcome to SASE & GDSC LSU's 4th annual hackathon! Brace yourself for three days of collaborating, programming, and other shenanigans. Each year, 100+ participants spend forty hours making a program to fit the prompt for the year. Participants of all skill levels in high school or college are allowed to participate, so please do not hesitate to join GeauxHack!</div>
            </div>

            <div className="dirtCart-1">
                <DirtCard
                    title="Rule"
                    content="Teams of 2-5,No AI wrapper,Just be Kind"
                    // list
                    backTitle="Prize"
                    backContent="More details will be released closer to the event."
                    list
                    width={400}
                    height={300}
                />
                <DirtCard
                    title="Schedule"
                    content="Detailed hour by hour will be released closer to the event"
                    // list
                    backTitle="Schedule"
                    backContent="Workshops, hack time, demos, and awards ceremony."
                    width={400}
                    height={300}
                />
            </div>

            <div className="dirtCart-1">
                <DirtCard
                    title="GeauxHack 2025 (Prediction)"
                    content="
         We expect 170-220 attendees this year thanks to expanded statewide marketing to Louisiana universities and high schools, providing more workshops and more mentorship for beginners, and more interactive activities to boost engagement and learning.                "
                    backTitle="GeauxHack 2024"
                    backContent="With over 150 participants and 85% positive feedback, our hackathon offers hands-on workshops, supportive mentorship, and engaging demo days. Join a collaborative community where you can learn new skills, network with peers, and bring innovative ideas to life—all in a welcoming environment.
"
                    width={400}
                    height={300}
                />
                <DirtCard
                    title="Sign Up"
                    content="Sign Up Form will be ready in: "
                    openDate={new Date("2025-08-30")}
                    backTitle="Location"
                    backContent="LSU ENGINEERING BUILDING: Patrick F. Taylor Hall, 3304 S Quad Dr Baton Rouge, LA 70803 United States"
                    width={400}
                    height={300}
                />
            </div>
            <GreenDiv title="Workshops" content="More information will be announced closer to the start of GeauxHack." />
            <GreenDiv
                title="Frequently Asked Questions"
                content={<Collapsible items={greenCollapsibleContent} keepOthersOpen={false} />}
            />
            <GreenDiv title="Sponsors" content="This section will be populated once sponsors have been finalized." />
        </div>
    );
}
export default InfoSection;
