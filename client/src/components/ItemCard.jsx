import { useState, useEffect } from "react";
import axios from "axios";
import "./ItemCard.css";

const ItemCard = ({ item, setItems }) => {
  const [availability, setAvailability] = useState("available");

  useEffect(() => {
    const updateAvailability = async () => {
      try {
        //communcate with databasa
        if (item.is_available === 1) setAvailability("not available");
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
      <div>
        <img src={item.image} alt={item.title} />
      </div>
      <div className="section">
        <h3>{item.title}</h3>
      </div>
      <div className="section">
        <p>{item.description}</p>
      </div>
      <div className="section">
        <p>{availability}</p>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default ItemCard;
