import {
    React,
    useState
} from "react";
import "./hackathon.css"

import ReactCurvedText from "react-curved-text";

import Backdrop from "./assets/titleBackdrop.png"
import Map from "./assets/blockMap.png"
import Clouds from "./assets/blockCloud.png"

import { Postcard } from "./helpers/hackathonHelpers";
import Card1 from "./assets/louisianaPostcard.png"
import Card2 from "./assets/newyork.png"

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
            <div className="hackathonAbout">
                <button onClick={() => {index == 0 ? setIndex(1) : setIndex(index - 1)}}>left</button>

                <div className="cardSlider"
                    style={{transform: `translate3d(${-index * 50}%, 0, 0)`}}>
                    {[
                        <Postcard
                            cardImage={Card1}
                            text="about"
                        />,
                        <Postcard
                        cardImage={Card2}
                        text="activity"
                        />
                    ]}
                </div>
                <button onClick={() => {index == 1 ? setIndex(0) : setIndex(index + 1)}}>right</button>

            </div>
        </div>
    )
}

export default Hackathon;