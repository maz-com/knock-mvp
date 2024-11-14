import { useState, useEffect } from "react";
import axios from "axios";
import "./AdminCard.css";

const AdminCard = ({ item, fetchUserItems, fetchItems }) => {
  const updateAvailability = async ({ id }) => {
    try {
      //communcate with databasa
      let response = await axios.put(
        `/api/items/${item.id}`,
        { is_available: !item.is_available },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      fetchUserItems();
      fetchItems();
      console.log(item.is_available);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async ({ id }) => {
    try {
      // delete task from database
      const response = await axios.delete(`/api/items/${item.id}`);
      // upon success, update tasks
      if (response.status === 200) {
        fetchUserItems();
        fetchItems();
      }
      // upon failure, show error message
    } catch (error) {
      console.error(error);
    }
  };

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
      </div>
      <div className="card-make-available">
        <button
          onClick={() => updateAvailability(item.id)}
          className={item.type === "borrow" ? "no-button" : null}
        >
          {item.type === "borrow"
            ? null
            : item.is_available
            ? "Make unavailable"
            : "Make available"}
        </button>
      </div>
      <div className="card-delete ">
        <button onClick={() => handleDelete(item.id)}>DELETE</button>
      </div>
    </div>
    //</div>
    // </div>
  );
};

export default AdminCard;
