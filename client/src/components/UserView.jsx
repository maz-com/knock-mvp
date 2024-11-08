import CardGroup from "react-bootstrap/CardGroup";
import ItemCard from "./ItemCard";
import "./UserView.css";

const UserView = ({ items, setItems }) => {
  return (
    // <div className="card-container">
    <CardGroup>
      {items.map((item) => {
        return <ItemCard key={item.id} item={item} setItems={setItems} />;
      })}
    </CardGroup>
    // </div>
  );
};

export default UserView;
