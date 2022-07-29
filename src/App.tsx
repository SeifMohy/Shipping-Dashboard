import React, { useState } from "react";
import Navbar from "./Components/navbar";
import FilteringButtons from "./Components/filteringButtons";
import SearchBar from "./Components/searchBar";
import Tabels from "./Components/tabels";
import { shipments } from "./Utils";

function App() {
  const [displayedShipments, setDisplayedShipments] = useState(shipments);

  return (
    <div className="bg-gray-100 p-2 h-screen">
      <Navbar />
      <FilteringButtons
        displayedShipments={displayedShipments}
        setDisplayedShipments={setDisplayedShipments}
      />
      <SearchBar
        displayedShipments={displayedShipments}
        setDisplayedShipments={setDisplayedShipments}
      />
      <Tabels
        displayedShipments={displayedShipments}
        setDisplayedShipments={setDisplayedShipments}
      />
    </div>
  );
}

export default App;
