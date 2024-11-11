import { useEffect, useState } from "react";
import axios from "axios";
import AdminCard from "./AdminCard";
import "./AdminView.css";

const AdminView = ({ addNewItem }) => {
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
    //fetch items by user
    const fetchItems = async () => {
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

    fetchItems();
  }, []);

  const sendNewItem = (input) => {
    addNewItem(input);
  };

  return (
    <div className="admin-view">
      <div className="profile-overview">
        {/* wait for currentUser data to be fetched and set into currentUser before displaying */}
        <h3 className="profile-headers">My Profile</h3>
        {currentUser[0] ? (
          <>
            <img src={currentUser[0].image} alt="profile image" />
            <p>
              <b>Username:</b> {currentUser[0].username}
            </p>
            <p>
              <b>Items listed:</b>
            </p>
            <p>
              <b>Items I'm offering to lend:</b>
            </p>
            <p>
              <b>Items I'm looking to borrow:</b>
            </p>
            <p>
              <b>Items currently lent out:</b>
            </p>
          </>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>

      <div className="my-items">
        {/* <AddItemForm sendNewItem={(input) => sendNewItem(input)} /> */}
        <h3 className="profile-headers">My Items</h3>
        <button className="add-new-item">Add new item</button>
        <div className="my-items-grid">
          {userItems.map((item) => {
            return <AdminCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminView;
