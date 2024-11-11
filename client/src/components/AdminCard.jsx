import { useState, useEffect } from "react";
//import axios from "axios";
import "./AdminCard.css";

const AdminCard = ({ item, setItems }) => {
  const [availability, setAvailability] = useState("Available");

  useEffect(() => {
    const showAvailability = async () => {
      try {
        //communcate with databasa
        if (item.is_available === 1) setAvailability("Not available");
      } catch (error) {
        // handle errors
        console.error(error);
      }
    };

    showAvailability();
  }, []);

  const updateAvailability = async () => {
    try {
      //communcate with databasa
      let response = await axios.put(
        `/api/items/${item.id}`,
        { is_available: !item.isAvailable },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <div className="row">
    //   <div className="column">
    <div className="card">
      <div className="card-img">
        <img src={item.image} alt={item.title} />
        <button
          className={
            item.is_available === 0 ? "badge available" : "badge unavailable"
          }
        >
          {availability}
        </button>
      </div>
      <div className="card-title">
        <h3>{item.title}</h3>
      </div>
      <div className="card-description">
        <p>{item.description}</p>
      </div>
      <div className="card-button button">
        <button onClick={() => updateAvailability}>Change availability</button>
      </div>
    </div>
    //</div>
    // </div>
  );
};

export default AdminCard;
