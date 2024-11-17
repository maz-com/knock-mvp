/* This component returns the category filter button */

import { useState } from "react";
import "./CategoryFilter.css";

const CategoryFilter = ({ category, selectedCategoryId, updateFilter }) => {
  //const isSelected returns true if selectedCategoryId (received from FilterMenu) is strictly equal to cateogry.id (also received from FilterMenu). This is used below to change the button className depending on whether the filter has been selected or not. The className determines the styling of the button in CSS
  const isSelected = selectedCategoryId === category.id;
  //store state of category filter (false = off, true = on)
  const [filterOn, setFilterOn] = useState(false);

  //on click of the button, update state of category filter to true/false
  const handleFilter = (id) => {
    setFilterOn(!filterOn);
    const categoryId = id;
    // call the updateFilter() function in FilterMenu with categoryId and !filterOn
    updateFilter(categoryId, !filterOn);
  };

  return (
    <>
      <button
        type="radio"
        id={category.name}
        name="categories"
        onClick={() => handleFilter(category.id)}
        className={`btn ${isSelected === true ? "clicked" : null}`}
      >
        {category.name}
      </button>
    </>
  );
};

export default CategoryFilter;
