import {
    React,
    useState
} from "react";
import "./hackathon.css"

import { HackathonNav } from "./helpers/hackathonNav";

import Backdrop from "./assets/titleCard/titleBackdrop.png"
import Map from "./assets/titleCard/blockMap.png"
import Clouds from "./assets/titleCard/blockCloud.png"

import MikeSearch from "./assets/MikeShop.png"

import backArrow from "./assets/about/backArrow.png"
import frontArrow from "./assets/about/frontArrow.png"
import aboutBackground from "./assets/about/hackathonAboutBackground.png"
import { Postcard } from "./helpers/hackathonHelpers";
import AboutCard from "./assets/hackathonPostcards/about.png"
import ActivitesCard from "./assets/hackathonPostcards/activities.png"
import WorkshopsCard from "./assets/hackathonPostcards/workshops.png"

import AboutBack from "./assets/hackathonPostcards/aboutBack.png"
import ActivitiesBack from "./assets/hackathonPostcards/activitiesBack.png"
import WorkshopsBack from "./assets/hackathonPostcards/workshopsBack.png"

import MikeTicket from "./assets/signup/MikeSignup.png"

import { ChecklistCard } from "./helpers/hackathonHelpers";
import MikePack from "./assets/faq/MikePack.png"

import MikeTakeoff from "./assets/sponsors/SponsorBackground.png"
import LSUCOE from "./assets/sponsors/LSU_CoE_White.jpg.png"
import SponsorshipPacket from "./assets/sponsors/Hackathon Sponsorship Packet 2024-25.pdf"

const Hackathon = () => {
    const [index, setIndex] = useState(0);
    
    return (
        <>
        <HackathonNav/>
        <div className="hackathon">
            <div className="hackathonTitleCard"
            style={{backgroundImage: `url(${Backdrop})`}}>
                <h1>GEAUX HACK</h1>
                <div className="midSection">
                    <h1>20</h1>
                    <div className="globe">
                        <div className="map">
                            <img src={Map}/>
                            <img src={Map}/>
                        </div>
                        <div className="clouds">
                            <img src={Clouds}/>
                            <img src={Clouds}/>
                        </div>
                    </div>
                    <h1>24</h1>
                </div>
                <h1>GEAUX HACK</h1>

            </div>

            <div className="hackathonTitleTransition"
            style={{backgroundImage: `url(${MikeSearch})`}}>
                <h1>Welcome back to our Third Annual GeauxHack! <br/>This year, Mike is looking for places to travel...</h1>
            </div>


            <div className="hackathonAbout"
            style={{backgroundImage: `url(${aboutBackground})`}}>
                <div className="cardSlider"
                    style={{transform: `translate3d(${-index * 33.33}%, 0, 0)`}}>
                    {[
                        <div className="card">                       
                            <Postcard
                                title="About"
                                cardImage={AboutCard}
                                cardBackImage={AboutBack}
                            />
                        </div>,
                        <div className="card">                       
                            <Postcard
                                title="Activites"
                                cardImage={ActivitesCard}
                                cardBackImage={ActivitiesBack}
                            />
                        </div>,
                        <div className="card">                       
                            <Postcard
                                title="Workshops"
                                cardImage={WorkshopsCard}
                                cardBackImage={WorkshopsBack}
                            />
                        </div>,
                    ]}
                </div>
                <img className="buttonLeft" src={backArrow} onClick={() => {index == 0 ? setIndex(2) : setIndex(index - 1)}}/>

                <img className="buttonRight" src={frontArrow} onClick={() => {index == 2 ? setIndex(0) : setIndex(index + 1)}}/>
            </div>

            <div className="hackathonSignUp"
                style={{backgroundImage: `url(${MikeTicket})`}}>
                <h2>Looks like Mike wants to go to GeauxHackia!</h2>
                <div className="signUpMonitor">
                    <h1>BTR → HCK</h1>
                    <p> Sign up for GeauxHack by clicking on the button below!</p>
                    <p> (Click the Sign Up Button)</p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVafj0EEkJrmPX6ay9xYdFrBybel6yfHDmviUKrA_SsA16WQ/viewform?usp=sf_link" target="_blank">
                        SIGN UP
                    </a>
                </div>

            </div>

            <div className="hackathonFAQ"
            style={{backgroundImage: `url(${MikePack})`}}>
                <h1 className="FAQText">Don't forget to pack the essentials!</h1>
                <div className="FAQContainer">
                    <ChecklistCard
                        title="What is GeauxHack?"
                        paragraph="GeauxHack is a Forty Hour, Three Day long Hackathon where groups of two to five members address some themed prompt. This year's theme will be focused on World Tourism."
                    />
                    <ChecklistCard
                        title="I'm new. Should I participate?"
                        paragraph="GeauxHack is the first Hackathon for many hackers! We will have two difficulty levels for beginners and more experienced Hackers to accomodate for skill levels."
                    />
                    <ChecklistCard
                        title="Who's allowed?"
                        paragraph="GeauxHack is allowed to ALL college and highschool students."
                    />
                    <ChecklistCard
                        title="Do I need to bring anything?"
                        paragraph="The only thing required is something to program with!"
                    />
                    <ChecklistCard
                        title="Do we get swag?"
                        paragraph="All participants will receive a free GeauxHack shirt on the last day! We will release the design on the first day."
                    />
                    <ChecklistCard
                        title="FREE STUFF??"
                        paragraph="On top of the shirt, we will be providing free breakfasts, lunches, and dinners at usual mealtimes, as well as providing snacks and refreshment throughout the day."
                    />
                    <ChecklistCard
                        title="What am I allowed to make?"
                        paragraph="You can make anything you want! We have no banned languages, meaning you can use anything from C to Scratch!"
                    />
                    <ChecklistCard
                        title="I have more questions!"
                        paragraph="Email us at lsu@saseconnect.org! We'll follow up as soon as we can."
                    />
                </div>
            </div>
            
            <div className="hackathonSponsors"
            style={{backgroundImage: `url(${MikeTakeoff})`}}>
                <h2>And we're off!</h2>
                <h1>Thank you to our Sponsors!</h1>
                <img src={LSUCOE}/>
                <div className="hackathonSponsorsText">   
    `               <h1>Want to become a sponsor?</h1>
                    <p>Click the button below!</p>
                    <a href={SponsorshipPacket} target="_blank">
                            Join Us!
                    </a>`
                </div>


            </div>
        </div>
        </>
    )
}

export default Hackathon;