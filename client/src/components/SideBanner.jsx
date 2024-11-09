import { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import "./SideBanner.css";

const SideBanner = () => {
  //button status unlcicked
  //on click of button 1
  //change button status to clicked
  //if button status is clicked
  //fetch all items with category of 1 and store in var result
  //update setItems to result
  //if button status is unclicked
  //fetch all items
  //update setItems

  const [filteredCleaning, setFilteredCleaning] = useState(false);

  //update state of filteredCleaning to true/false
  const updateCleaningFilter = () => {
    /*if (filteredCleaning) {
        try {
            //communcate with databasa
            let response = await axios.get("/api/items/category/:category_id");
            setItems(response.data);
          } catch (error) {
            // handle errors
            console.error(error);
          }
    } */

    //console.log(!filteredCleaning);
    setFilteredCleaning(!filteredCleaning);
  };

  return (
    <div className="filter-menu-container">
      <h3 className="filter-title">Filter by category</h3>

      <button
        role="button"
        onClick={() => updateCleaningFilter()}
        className={`cleaning-button categories ${
          filteredCleaning ? "clicked" : null
        }`}
      >
        Cleaning
      </button>
      <button className="DIY-button categories" role="button">
        DIY
      </button>
      <button className="gardening-button categories" role="button">
        Gardening
      </button>
      <button className="outdoors-button categories" role="button">
        Outdoors
      </button>
      <button className="cooking-button categories" role="button">
        Cooking
      </button>
      <button className="audiovisual-button categories" role="button">
        Audiovisual
      </button>
      <button className="games-hobbies-button categories" role="button">
        Games & Hobbies
      </button>
    </div>
  );
};

export default SideBanner;
