import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    // <div className="row">
    //   <div className="column">
    <div className={item.type === "lend" ? "card lend" : "card borrow"}>
      <div className="card-img">
        <img src={item.image} alt={item.title} />
        <button
          className={
            item.type === "borrow"
              ? "badge borrow"
              : item.is_available
              ? "badge available"
              : "badge unavailable"
          }
        >
          {item.type === "borrow"
            ? "Request"
            : item.is_available
            ? "Available"
            : "Not available"}
        </button>
      </div>
      <div className="card-title">
        <h3>{item.title}</h3>
      </div>
      <div className="card-description">
        <p>{item.description}</p>
      </div>
      <div className="card-button">
        <a href="mailto:mail@example.com">
          <button>{item.is_available ? "Request" : "Enquire"}</button>
        </a>
      </div>
    </div>
    //</div>
    // </div>
  );
};

export default ItemCard;
