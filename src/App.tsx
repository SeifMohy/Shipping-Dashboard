import React, { useEffect, useState } from "react";
import Navbar from "./Components/navbar";
import FilteringButtons from "./Components/filteringButtons";
import SearchBar from "./Components/searchBar";
import Tabels from "./Components/tabels";
import axios from "axios";
import { Order } from "./Types";

function App() {
  const [displayedShipments, setDisplayedShipments] = useState<Order[]>([]);
  const [updatedShipments, setUpdatedShipments] = useState<Order[]>([]);

  async function getAndSetShipments() {
    const res = await axios.get("https://localhost:7173/api/shipments/");
    const shipments = res.data;
    setDisplayedShipments(shipments);
    setUpdatedShipments(shipments);
    console.log(shipments);
  }
  useEffect(() => {
    getAndSetShipments();
  }, []);
  if(updatedShipments.length === 0){return <div>loading...</div>}
  return (
    <div className="bg-gray-100 p-2 h-screen">
      <Navbar />
      <FilteringButtons
        displayedShipments={displayedShipments}
        setDisplayedShipments={setDisplayedShipments}
        updatedShipments={updatedShipments}
      />
      <SearchBar
        displayedShipments={displayedShipments}
        setDisplayedShipments={setDisplayedShipments}
        updatedShipments={updatedShipments}
      />
      <Tabels
        displayedShipments={displayedShipments}
        setDisplayedShipments={setDisplayedShipments}
        updatedShipments={updatedShipments}
        setUpdatedShipments={setUpdatedShipments}
      />
    </div>
  );
}

export default App;
