import { useState, useEffect } from "react";
import "./CategoryFilter.css";

const CategoryFilter = ({ category, updateFilter }) => {
  const [filterOn, setFilterOn] = useState(false);

  //update state of category filter to true/false
  const handleFilter = (id) => {
    //console.log(!filterOn);
    console.log(`first the filter is on: ${filterOn}`);
    setFilterOn(!filterOn);
    console.log(`we have now updated it to: ${filterOn}`);
    const categoryId = id;
    // pass category id up to parent using props.updateFilter() (calls the updateFilter function in SideBanner.jsx)
    updateFilter(categoryId, filterOn);
  };

  return (
    <>
      <button
        role="button"
        onClick={() => handleFilter(category.id)}
        className={`cleaning-button categories ${filterOn ? "clicked" : null}`}
      >
        {category.name}
      </button>
    </>
  );
};

export default CategoryFilter;
