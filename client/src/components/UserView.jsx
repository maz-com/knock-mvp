import ItemCard from "./ItemCard";
import "./UserView.css";

const UserView = ({ items, setItems }) => {
  return (
    <div className="card-container">
      {items.map((item) => {
        return <ItemCard key={item.id} item={item} setItems={setItems} />;
      })}
    </div>
  );
};

export default UserView;
