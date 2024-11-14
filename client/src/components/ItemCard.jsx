import { useState, useEffect } from "react";
import axios from "axios";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const [ownerData, setOwnerData] = useState([]);

  //fetch owner username by item id
  useEffect(() => {
    const fetchOwnerData = async ({ id }) => {
      try {
        //communcate with databasa
        let response = await axios.get(`/api/items/data/1`);
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
    <div className={item.type === "lend" ? "card lend" : "card borrow"}>
      <div className="card-img">
        <img src={item.image} alt={item.title} />
        <button
          className={
            item.type === "borrow"
              ? "badge borrow"
              : item.is_available
              ? "badge available"
              : "badge unavailable"
          }
        >
          {item.type === "borrow"
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
          item.type === "lend" ? "card-button lend" : "card-button borrow"
        }
      >
        <a href="mailto:mail@example.com">
          <button>
            {item.type === "borrow"
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
