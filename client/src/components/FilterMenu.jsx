import { useState, useEffect } from "react";
import axios from "axios";
import CategoryFilter from "./CategoryFilter";
//import TypeFilter from "./TypeFilter";
import "./FilterMenu.css";

const FilterMenu = ({ updateItemsByCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState([]);
  //const [types, setTypes] = useState(["borrow", "lend"]);

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
    // Set the selected category ID, or null if the same button is clicked again
    setSelectedCategoryId(filterOn ? selectedCategory : null);
    // Update items based on selected category in parent component
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
      {/* <h3 className="filter-title">Filter by type</h3>
      {types.map((type) => {
        return (
          //create filter button for each category
          <TypeFilter
            key={type}
            type={type}
            updateFilter={(selectedCategory, filterOn) =>
              handleSelectedCategory(selectedCategory, filterOn)
            } 
      /> ); })} */}
    </div>
  );
};

export default FilterMenu;
