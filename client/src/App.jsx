import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./components/Banner";
import UserView from "./components/UserView";
import AdminView from "./components/AdminView";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  /* const testFetch = async () => {
    // because of our proxy in vite.config, we can now fetch directly to "/api"
    const response = await axios.get("/api/items");
    console.log(response.data);
  };

  testFetch(); */

  //useEffect is used when you want to trigger something when some piece of state changes
  useEffect(() => {
    const fetchItems = async () => {
      try {
        //communcate with databasa
        let response = await axios.get("/api/items");
        console.log(response.data);
        setItems(response.data);
      } catch (error) {
        // handle errors
        console.error(error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <header>
        <Banner />
      </header>
      <main>
        <UserView items={items} />
        {/* <AdminView /> */}
      </main>
    </div>
  );
}

export default App;
