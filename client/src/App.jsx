import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./components/Banner";
import UserView from "./components/UserView";
import AdminView from "./components/AdminView";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  //useEffect is used when you want to trigger something when some piece of state changes
  useEffect(() => {
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

    fetchItems();
  }, []);

  const updateCategory = async (selectedCategoryId, filterOn) => {
    console.log(`filter is on: ${filterOn}`);
    if (filterOn) {
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

      fetchItems();
    }
  };

  const handleNewItem = async (input) => {
    try {
      // communicate with db: add task
      // axios.method(url, data(opt), options(say type of data))
      let response = await axios.post(
        "/api/items",
        {
          title: input.title,
          description: input.description,
          image: input.image,
          category_id: 1,
          is_available: 0,
          user_id: 0,
          type: "lend",
        },
        {
          headers: {
            // If sending data in the body, must send header to say what type of data we are sending
            "Content-Type": "application/json",
          },
        }
      );
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
        <Banner />
      </header>
      <main>
        {/* <div className="side-banner-container">
          <SideBanner
            updateItemsByCategory={(selectedCategoryId, filterOn) =>
              updateCategoryFilter(selectedCategoryId, filterOn)
            }
          />
        </div> */}

        {/* <UserView
          items={items}
          updateCategoryView={(selectedCategoryId, filterOn) =>
            updateCategory(selectedCategoryId, filterOn)
          }
        /> */}
        <AdminView addNewItem={(input) => handleNewItem(input)} />
      </main>
    </div>
  );
}

export default App;
