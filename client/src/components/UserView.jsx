import { useEffect, useState } from "react";
import axios from "axios";
import SideBanner from "./SideBanner";
import ItemCard from "./ItemCard";
import "./UserView.css";

const UserView = ({ items, updateCategoryView }) => {
  /* const [items, setItems] = useState([]);

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
  }, []); */

  /* const updateCategoryFilter = async (selectedCategoryId, filterOn) => {
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
  }; */

  const updateCategoryFilter = (selectedCategory, filterOn) => {
    updateCategoryView(selectedCategory, filterOn);
  };

  return (
    <>
      <div className="user-view">
        <div className="side-banner-container">
          <SideBanner
            updateItemsByCategory={(selectedCategoryId, filterOn) =>
              updateCategoryFilter(selectedCategoryId, filterOn)
            }
          />
        </div>
        <div className="items-container">
          <div className="card-container">
            {items.map((item) => {
              return <ItemCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserView;
