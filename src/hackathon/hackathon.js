import {
    React,
    useState
} from "react";
import "./hackathon.css"

import ReactCurvedText from "react-curved-text";

import Backdrop from "./assets/titleBackdrop.png"
import Map from "./assets/blockMap.png"
import Clouds from "./assets/blockCloud.png"

import MikeSearch from "./assets/MikeShop.png"

import { Postcard } from "./helpers/hackathonHelpers";
import Card1 from "./assets/louisianaPostcard.png"
import Card2 from "./assets/newyork.png"
import Card3 from "./assets/alaska.png"

import MikeTicket from "./assets/signup.png"

import { ChecklistCard } from "./helpers/hackathonHelpers";
import MikePack from "./assets/MikePack.png"
import { Check } from "@mui/icons-material";

const Hackathon = () => {
    const [index, setIndex] = useState(0);
    
    return (
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


            <div className="hackathonAbout">
                <div className="cardSlider"
                    style={{transform: `translate3d(${-index * 33.33}%, 0, 0)`}}>
                    {[
                        <div className="card">                       
                            <Postcard
                                title="About"
                                cardImage={Card1}
                                text="test"
                            />
                        </div>,
                        <div className="card">                       
                            <Postcard
                                title="Activites"
                                cardImage={Card2}
                                text="test"
                            />
                        </div>,
                        <div className="card">                       
                            <Postcard
                                title="Workshops"
                                cardImage={Card3}
                                text="test"
                            />
                        </div>,
                    ]}
                </div>
                <button className="buttonLeft" onClick={() => {index == 0 ? setIndex(2) : setIndex(index - 1)}}>left</button>

                <button className="buttonRight" onClick={() => {index == 2 ? setIndex(0) : setIndex(index + 1)}}>right</button>

            </div>

            <div className="hackathonSignUp"
                style={{backgroundImage: `url(${MikeTicket})`}}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVafj0EEkJrmPX6ay9xYdFrBybel6yfHDmviUKrA_SsA16WQ/viewform?usp=sf_link" target="_blank">
                    SIGN UP
                </a>
            </div>

            <div className="hackathonFAQ"
            style={{backgroundImage: `url(${MikePack})`}}>
                <ChecklistCard/>
            </div>

        </div>
    )
}

export default Hackathon;