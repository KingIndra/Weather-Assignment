import React from "react";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center p-8">
      <Search />
      {/* <WeatherDisplay /> */}
      {/* <Favorites /> */}
    </div>
  );
}

export default App;
