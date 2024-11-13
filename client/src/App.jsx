import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
//import Banner from "./components/Banner";
import PublicView from "./components/PublicView";
import AdminView from "./components/AdminView";
import AddItemForm from "./components/AddItemForm";
import Images from "./components/Images";

//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      //communcate with databasa
      let response = await axios.get("/api/items");
      console.log(response.data);
      setItems(response.data);
    } catch (error) {
      // handle errors
      console.error(error);
    }
  };

  //useEffect is used when you want to trigger something when some piece of state changes
  useEffect(() => {
    /* const fetchItems = async () => {
        try {
          //communcate with databasa
          let response = await axios.get("/api/items");
          console.log(response.data);
          setItems(response.data);
        } catch (error) {
          // handle errors
          console.error(error);
        }
      }; */

    fetchItems();
  }, []);

  const updateCategory = async (selectedCategoryId, filterOn) => {
    console.log(`filter is on: ${filterOn}`);
    //if a filter has been selected
    if (filterOn) {
      //fetch items by category id
      try {
        // update task from database
        const response = await axios.get(
          `/api/items/category/${selectedCategoryId}`
        );
        //console.log(response.data);
        setItems(response.data);
      } catch (error) {
        // upon failure, show error message
        console.error(error);
      }
    } else {
      fetchItems();
    }
  };

  const handleNewItem = async (input) => {
    try {
      // communicate with db: add task
      // axios.method(url, data(opt), options(say type of data))
      if (input.type === "borrow") {
        let response = await axios.post(
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
      } else {
        let response = await axios.post(
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
      // Continue fetch request here
      // get the new task object from db response
      const newItem = response.data;
      // add it to your state
      setItems((state) => [...state, newItem]);
    } catch (error) {
      console.error(error);
    }
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
              <PublicView
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
