import { useState, useEffect } from "react";
import axios from "axios";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const [ownerData, setOwnerData] = useState([]);

  //fetch owner username by item id
  useEffect(() => {
    const fetchOwnerData = async (id) => {
      try {
        //communcate with databasa
        let response = await axios.get(`/api/items/data/${id}`);
        console.log(response);
        setOwnerData(response.data);
      } catch (error) {
        // handle errors
        console.error(error);
      }
    };
    fetchOwnerData(item.id);
  }, [item]);

  return (
    // <div className="row">
    //   <div className="column">
    <div className={item.type === "lend" ? "card lend" : "card request"}>
      <div className="card-img">
        <img src={item.image} alt={item.title} />
        <button
          className={
            item.type === "request"
              ? "badge request"
              : item.is_available
              ? "badge available"
              : "badge unavailable"
          }
        >
          {item.type === "request"
            ? "Request"
            : item.is_available
            ? "Available"
            : "Not available"}
        </button>
      </div>
      <div className="card-title">
        <h3>{item.title}</h3>
      </div>
      <div className="card-description">
        <p>{item.description}</p>
        <p>
          by <b>{ownerData.username}</b>
        </p>
      </div>
      <div
        className={
          item.type === "lend" ? "card-button lend" : "card-button request"
        }
      >
        <a href="mailto:mail@example.com">
          <button>
            {item.type === "request"
              ? "REPLY"
              : item.is_available
              ? "BORROW"
              : "ENQUIRE"}
          </button>
        </a>
      </div>
    </div>
    //</div>
    // </div>
  );
};

export default ItemCard;
