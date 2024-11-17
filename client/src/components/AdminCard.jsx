/* This component returns the item cards as displayed in 'My Profile'/AdminvView */

import axios from "axios";
import "./AdminCard.css";

const AdminCard = ({ item, fetchUserItems, fetchItems }) => {
  //function to update 'is_available' value in 'items' database table
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
      //call fetchUserItems to update items displayed in main page/NeighboursView
      fetchItems();
      //call fetchUserItems to update items displayed in My Profile page/AdminView
      fetchUserItems();
    } catch (error) {
      console.error(error);
    }
  };

  //function to handle item delete button
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
      </div>
      <div className="card-make-available">
        <button
          onClick={() => updateAvailability(item.id)}
          className={item.type === "request" ? "no-button" : null}
        >
          {item.type === "request"
            ? null
            : item.is_available
            ? "MAKE AVAILABLE"
            : "MAKE UNAVAILABLE"}
        </button>
      </div>
      <div className="card-delete ">
        <button onClick={() => handleDelete(item.id)}>DELETE</button>
      </div>
    </div>
  );
};

export default AdminCard;
