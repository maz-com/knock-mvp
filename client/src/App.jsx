import axios from "axios";
import Banner from "./components/Banner";
import UserView from "./components/UserView";
import AdminView from "./components/AdminView";
import "./App.css";

function App() {
  const testFetch = async () => {
    // because of our proxy in vite.config, we can now fetch directly to "/api"
    const response = await axios.get("/api/items");
    console.log(response.data);
  };

  testFetch();

  return (
    <div>
      <Banner />
      <UserView />
      <AdminView />
    </div>
  );
}

export default App;
