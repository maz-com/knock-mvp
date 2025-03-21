import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import NeighboursView from "./components/NeighboursView";
import AdminView from "./components/AdminView";
import AddItemForm from "./components/AddItemForm";
import Images from "./components/Images";
import "./App.css";

function App() {
  //variable to store all items
  const [items, setItems] = useState([]);
  //variable to store user's items only (for admin view)
  const [userItems, setUserItems] = useState([]);

  //function to fetch all items and set result to 'items' array
  const fetchItems = async () => {
    try {
      //communcate with databasa
      let response = await axios.get("/api/items");
      setItems(response.data);
    } catch (error) {
      // handle errors
      console.error(error);
    }
  };

  useEffect(() => {
    //call fetchItems function
    fetchItems();
  }, []);

  //function to fetch user's items only (for admin view)
  const fetchUserItems = async () => {
    try {
      //communcate with databasa
      let response = await axios.get(`/api/items/user/1`);
      setUserItems(response.data);
    } catch (error) {
      // handle errors
      console.error(error);
    }
  };

  //function to handle category filter buttons
  const updateCategory = async (selectedCategoryId, filterOn) => {
    //if a filter is selected
    if (filterOn) {
      //fetch items by category id
      try {
        const response = await axios.get(
          `/api/items/category/${selectedCategoryId}`
        );
        //update 'items' with result
        setItems(response.data);
      } catch (error) {
        // upon failure, show error message
        console.error(error);
      }
      //if no filter is selected
    } else {
      //call fetchItems function again, which updates 'items' to contain all items
      fetchItems();
    }
  };

  //function to handle add new item form input
  const handleNewItem = async (input) => {
    try {
      let response;
      // communicate with db: post new item
      //if posting an item request, hard code 'request' image to the card and pull other data from input
      if (input.type === "request") {
        response = await axios.post(
          "/api/items",
          {
            title: input.title,
            description: input.description,
            image: "http://localhost:5173/src/assets/REQUEST.png",
            category_id: input.category_id,
            is_available: 0,
            user_id: 1,
            type: input.type,
          },
          {
            headers: {
              // If sending data in the body, must send header to say what type of data we are sending
              "Content-Type": "application/json",
            },
          }
        );
        //otherwise, if posting a regular item, pull all data from input
      } else {
        response = await axios.post(
          "/api/items",
          {
            title: input.title,
            description: input.description,
            image: input.image,
            category_id: input.category_id,
            is_available: 0,
            user_id: 1,
            type: input.type,
          },
          {
            headers: {
              // If sending data in the body, must send header to say what type of data we are sending
              "Content-Type": "application/json",
            },
          }
        );
      }
      //get the new item object from db response
      const newItem = response.data;
      // add it to your state
      setItems((state) => [...state, newItem]);
    } catch (error) {
      console.error(error);
    }

    //call fetchItems function to show all items
    fetchItems();
    fetchUserItems();
  };

  return (
    <div>
      <header>
        <div className="title container">
          <Link to="/">
            <h1>Knock!</h1>
          </Link>
        </div>

        <div className="navbar container">
          <div className="navbutton">
            <Link to="/">Home</Link>
          </div>
          <div className="navbutton">
            <Link to="/admin">My Profile</Link>
          </div>
        </div>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <NeighboursView
                items={items}
                updateCategoryView={(selectedCategoryId, filterOn) =>
                  updateCategory(selectedCategoryId, filterOn)
                }
              />
            }
          />
          <Route
            path="/admin"
            element={
              <AdminView
                addNewItem={(input) => handleNewItem(input)}
                fetchItems={fetchItems}
                fetchUserItems={fetchUserItems}
                userItems={userItems}
              />
            }
          />
          <Route
            path="admin/add-item"
            element={
              <AddItemForm sendNewItem={(input) => handleNewItem(input)} />
            }
          />

          <Route path="images" element={<Images />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
