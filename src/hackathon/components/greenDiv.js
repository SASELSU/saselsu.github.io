import "./greenDiv.css";
function GreenDiv({ title, content }) {
    return(
        <div className="greenDiv">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}

export default GreenDiv