import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>

      <h3>Choose your neighbourhood</h3>

      <Link to="/">
        <button className="choose-neighbourhood">Langford Green</button>
      </Link>
    </div>
  );
};

export default Dashboard;
