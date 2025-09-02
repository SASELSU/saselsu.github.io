import "./greenDiv.css";
function GreenDiv({ title, content }) {
    return(
        <div className="greenDiv">
            <h2 className="greenHeader">{title}</h2>
            <div>{content}</div>
        </div>
    );
}

export default GreenDiv