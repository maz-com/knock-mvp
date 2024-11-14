import { useState } from "react";
import "./TypeFilter.css";

const TypeFilter = ({ category, selectedCategoryId, updateFilter }) => {
  /*  //manage category button className to update CSS styling
  const isSelected = selectedCategoryId === category.id;
  //store state of category filter (false = off, true = on). This is to be passed up to AdminView for use in updateCategory function
  const [filterOn, setFilterOn] = useState(false);

  //update state of category filter to true/false
  const handleFilter = (id) => {
    setFilterOn(!filterOn);
    const categoryId = id;
    // call the updateFilter() function in parent with categoryId and !filterOn
    updateFilter(categoryId, !filterOn);
  }; */

  return (
    <>
      {/* <button
        type="radio"
        id={category.name}
        name="categories"
        onClick={() => handleFilter(category.id)}
        className={`btn ${isSelected === true ? "clicked" : null}`}
      >
        {category.name}
      </button> */}
    </>
  );
};

export default TypeFilter;
