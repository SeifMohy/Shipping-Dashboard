import React from "react";
import Navbar from "./Components/navbar";
import FilteringButtons from "./Components/filteringButtons";
import SearchBar from "./Components/searchBar";
import Tabels from "./Components/tabels";

function App() {
  return (
    <div className="bg-gray-50 h-screen">
      <Navbar />
      <FilteringButtons />
      <SearchBar />
      <Tabels />
    </div>
  );
}

export default App;
