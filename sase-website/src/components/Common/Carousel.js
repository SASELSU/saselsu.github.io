import { 
    React, 
    useState,
    useEffect,
    useRef,
} from "react";
import "./Carousel.css";

// despite what you may think, future webmaster, Carousel is not used for 
// the home page background switching... your answer lies in home.js.... -ricky

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 8000;

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const length = 3;

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => 
            setIndex((prevIndex) => prevIndex === length - 1 ? 0 : prevIndex + 1),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="carousel">
            <div 
                className="carouselSlider"
                style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
            {
              colors.map((backgroundColor, index) => (
                <div    
                    className="slide"
                    key={index}
                    style={{backgroundColor}}
                />
              ))}
            </div>
            <p>{index}</p>
        </div>
    )
}

export default Carousel;