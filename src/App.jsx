import React from "react";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import TemperatureToggle from "./components/TemperatureToggle";
import "./App.css";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center p-4">
      <TemperatureToggle />
      <Search />
      {/* <Favorites /> */}
    </div>
  );
}

export default App;
