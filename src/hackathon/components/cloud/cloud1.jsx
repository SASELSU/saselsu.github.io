import { useEffect, useState } from "react";
import cloudImg from "../../assets/cloud/Cloud.svg";
import "./cloud.css";

function Cloud1() {
  const eventDate = new Date("2025-11-07");
  const today = new Date();
  const timeDiff = eventDate - today;
  const finalCount = Math.max(0, Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < finalCount) {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= finalCount) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 25); 
      return () => clearInterval(interval);
    }
  }, [count, finalCount]);

  return (
    <div className="cloud-container">
      <img src={cloudImg} alt="Cloud" className="cloud-img" />
      <div className="cloud-text">
        <div className="cloud-number">{count}</div>
        <div className="cloud-label">days left</div>
      </div>
    </div>
  );
}

export default Cloud1;
