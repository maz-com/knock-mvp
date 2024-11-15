import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminCard from "./AdminCard";
import "./AdminView.css";

const AdminView = ({ addNewItem, fetchItems }) => {
  const [userItems, setUserItems] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        //communcate with databasa
        let response = await axios.get(`/api/users/1`);
        console.log(response.data);
        setCurrentUser(response.data);
      } catch (error) {
        // handle errors
        console.error(error);
      }
    };

    fetchUser();
    fetchUserItems();
  }, []);

  //fetch items by user
  const fetchUserItems = async () => {
    try {
      //communcate with databasa
      let response = await axios.get(`/api/items/user/1`);
      console.log(response.data);
      setUserItems(response.data);
    } catch (error) {
      // handle errors
      console.error(error);
    }
  };

  /*  const sendNewItem = (input) => {
    addNewItem(input);
  }; */

  return (
    <div className="admin-view">
      <div className="profile-overview">
        {/* wait for currentUser data to be fetched and set into currentUser before displaying */}
        <h3 className="headers">My Profile</h3>
        {currentUser[0] ? (
          <>
            <img src={currentUser[0].image} alt="profile image" />
            <p>
              <b>Username:</b> {currentUser[0].username}
            </p>
            <p>
              <b>Name:</b> {currentUser[0].name}
            </p>
            <p>
              <b>Items listed: </b>
              {userItems.length}
            </p>
            <p>
              <b>Items I'm offering to lend:</b>{" "}
              {userItems.filter((item) => item.type === "lend").length}
            </p>
            <p>
              <b>Requested items:</b>{" "}
              {userItems.filter((item) => item.type === "request").length}
            </p>
            <p>
              <b>Items currently lent out:</b>{" "}
              {userItems.filter((item) => item.is_available).length}
            </p>
          </>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>

      <div className="my-items">
        <h3 className="headers">My Items</h3>
        <Link to="/admin/add-item">
          <button className="add-new-item">Add new item</button>
        </Link>
        <div className="my-items-grid">
          {userItems.map((item) => {
            return (
              <AdminCard
                key={item.id}
                item={item}
                fetchUserItems={fetchUserItems}
                fetchItems={fetchItems}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminView;
