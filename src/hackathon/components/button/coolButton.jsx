import "./coolButton.css";
function CoolButton ({ website, image, imageDesc }) {
    return (
        <a href={website}>
            <button className="helenaMakesTheBestButtons">
                <img className="coolImage" alt={imageDesc} src={image} height="30vh" width="100vw"></img>
            </button>
        </a>
    );
}

export default CoolButton;
