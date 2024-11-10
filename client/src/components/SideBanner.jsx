import { useState, useEffect } from "react";
import axios from "axios";
import CategoryFilter from "./CategoryFilter";
import "./SideBanner.css";

const SideBanner = ({ updateItemsByCategory }) => {
  //button status unlcicked
  //on click of button 1
  //change button status to clicked
  //if button status is clicked
  //fetch all items with category of 1 and store in var result
  //update setItems to result
  //if button status is unclicked
  //fetch all items
  //update setItems

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //get all categories from db
    const fetchCategories = async () => {
      try {
        //communcate with databasa
        let response = await axios.get("/api/categories");
        setCategories(response.data);
      } catch (error) {
        // handle errors
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const handleSelectedCategory = (selectedCategory, filterOn) => {
    updateItemsByCategory(selectedCategory, filterOn);
  };

  return (
    <div className="filter-menu-container">
      <h3 className="filter-title">Filter by category</h3>
      {categories.map((category) => {
        return (
          //create filter button for each category
          <CategoryFilter
            key={category.id}
            category={category}
            updateFilter={(selectedCategory, filterOn) =>
              handleSelectedCategory(selectedCategory, filterOn)
            }
          />
        );
      })}
    </div>
  );
};

export default SideBanner;
