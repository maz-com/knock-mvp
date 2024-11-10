import { useState, useEffect } from "react";
//import axios from "axios";
import "./PreviewItem.css";

const PreviewItem = ({ item, setItems }) => {
  const [availability, setAvailability] = useState("Available");

  useEffect(() => {
    const updateAvailability = async () => {
      try {
        //communcate with databasa
        if (item.is_available === 1) setAvailability("Not available");
      } catch (error) {
        // handle errors
        console.error(error);
      }
    };

    updateAvailability();
  }, []);

  return (
    // <div className="row">
    //   <div className="column">
    <div className="card">
      <div className="card-img">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="card-title">
        <h3>{item.title}</h3>
      </div>
      <div className="card-description">
        <p>{item.description}</p>
      </div>
      <div
        className={
          item.is_available === 0 ? "card-available" : "card-unavailable"
        }
      >
        <p>{availability}</p>
      </div>
    </div>
    //</div>
    // </div>
  );
};

export default PreviewItem;
