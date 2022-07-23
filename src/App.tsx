import React, { useState } from "react";
import Navbar from "./Components/navbar";
import FilteringButtons from "./Components/filteringButtons";
import SearchBar from "./Components/searchBar";
import Tabels from "./Components/tabels";
import { shipments } from "./Utils";

function App() {
  const [searchedShipments, setSearchedShipments] = useState(shipments);

  return (
    <div className="bg-gray-100 p-2 h-screen">
      <Navbar />
      <FilteringButtons />
      <SearchBar
        searchedShipments={searchedShipments}
        setSearchedShipments={setSearchedShipments}
      />
      <Tabels
        searchedShipments={searchedShipments}
        setSearchedShipments={setSearchedShipments}
      />
    </div>
  );
}

export default App;
