import Badge from "react-bootstrap/Badge";
import "./SideBanner.css";

const SideBanner = () => {
  return (
    <div class="filter-menu-container">
      <h3 className="filter-title">Filter by category</h3>

      <button class="cleaning-button categories" role="button">
        Cleaning
      </button>
      <button class="DIY-button categories" role="button">
        DIY
      </button>
      <button class="gardening-button categories" role="button">
        Gardening
      </button>
      <button class="outdoors-button categories" role="button">
        Outdoors
      </button>
      <button class="cooking-button categories" role="button">
        Cooking
      </button>
      <button class="audiovisual-button categories" role="button">
        Audiovisual
      </button>
      <button class="games-hobbies-button categories" role="button">
        Games & Hobbies
      </button>
    </div>
  );
};

export default SideBanner;
