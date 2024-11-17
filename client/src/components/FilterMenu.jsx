/* This component return the sidebar menu that contains filter buttons */

import { useState, useEffect } from "react";
import axios from "axios";
import CategoryFilter from "./CategoryFilter";
import "./FilterMenu.css";

const FilterMenu = ({ updateItemsByCategory }) => {
  //empty array variable to store categories data from the database
  const [categories, setCategories] = useState([]);
  //empty array variable to store data about selected cateogry button
  const [selectedCategoryId, setSelectedCategoryId] = useState([]);

  //function to fetch data about all categories from 'categories' table in database
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

  //function to handle cateogry selected in CategoryFilter, with selectedCategory and filerOn (received from CategoryFilter)
  const handleSelectedCategory = (selectedCategory, filterOn) => {
    //Set the selected category ID, or null if the same button is clicked again
    setSelectedCategoryId(filterOn ? selectedCategory : null);
    //Pass data to parent (NeighboursView) to update which items are displayed
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
            selectedCategoryId={selectedCategoryId}
            updateFilter={(selectedCategory, filterOn) =>
              handleSelectedCategory(selectedCategory, filterOn)
            }
          />
        );
      })}
    </div>
  );
};

export default FilterMenu;
