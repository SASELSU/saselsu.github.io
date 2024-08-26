import React from "react";
import "../styles/home.css";
import CommunityBackground1 from "../assets/home_backgrounds/community-background-1.png"

// const BackgroundImage = (props) => {
//     const {
//         image,
//         link,
//     } = props;
//     return (
//     <Link to {...link}>
//         <img src={image} />
//     </Link>  
//     )
// }

const Home = () => {
    return (
        <div 
            className="home"
            style={{backgroundImage: `url(${CommunityBackground1})`}}
        >
            <div 
                className="headerContainer" 
            > 
                <h1>the home</h1>
            </div>
        </div>
    )
}

export default Home;