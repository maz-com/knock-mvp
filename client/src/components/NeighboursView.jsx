/* This component returns the main page with all items and filter menu */

import FilterMenu from "./FilterMenu";
import ItemCard from "./ItemCard";
import "./NeighboursView.css";

const NeighboursView = ({ items, updateCategoryView }) => {
  //noItems returns true if there are no items in the 'items' array in App.jsx
  const noItems = items.length === 0;

  //Function called on receiving updateItemsByCategory function from FilterMenu. Pass data to parent (App.jsx) to update which items are displayed
  const updateCategoryFilter = (selectedCategory, filterOn) => {
    updateCategoryView(selectedCategory, filterOn);
  };

  return (
    <>
      <div className="user-view">
        <div className="side-banner-container">
          <FilterMenu
            updateItemsByCategory={(selectedCategoryId, filterOn) =>
              updateCategoryFilter(selectedCategoryId, filterOn)
            }
          />
        </div>
        <div className="items-container">
          <div className="all-items">
            <h3 className="headers">My neighbourhood items</h3>
          </div>
          {noItems ? (
            <p className="no-items alert">
              Sorry, there are no items in this category. Why not add one?
            </p>
          ) : (
            <div className="card-container">
              {items.map((item) => {
                return <ItemCard key={item.id} item={item} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NeighboursView;
