import React, { useState } from "react";
import useCitiesAPI from "../api/cities";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const Dropdown = () => {
  const { cities, addCity, removeCity, updateCity } = useCitiesAPI();
  const [hoveredCity, setHoveredCity] = React.useState(null);
  const [newCity, setNewCity] = React.useState("");

  return (
    <div className="text-black px-3 pb-3">
      <div className="">
        <ul className="city-list">
          {cities.map((city) => {
            return (
              <li
                className="cursor-pointer my-2"
                key={city.id}
                onMouseEnter={() => setHoveredCity(city.id)}
                onMouseLeave={() => setHoveredCity(null)}
                onClick={(event) => {
                  event.stopPropagation();
                  handleCitySelect(city);
                }}
              >
                <div className="flex justify-between items-center">
                  <input
                    className="outline-none bg-transparent"
                    type="text"
                    value={city.name}
                    onChange={(event) => {
                      const newName = event.target.value;
                      updateCity(city.id, newName);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.target.blur();
                      }
                    }}
                  />
                  {hoveredCity === city.id && (
                    <div className="flex items-center">
                      <div
                        className="hover:text-gray-500 pl-1"
                        onClick={(event) => {
                          event.stopPropagation();
                          removeCity(city.id);
                        }}
                      >
                        <DeleteIcon fontSize="2" />
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between">
          <input
            className="outline-none bg-transparent w-full"
            type="text"
            value={newCity}
            onChange={(event) => {
              setNewCity(event.target.value);
            }}
          />
          <div
            className="hover:text-gray-500"
            onClick={() => {
              if (newCity) {
                addCity(newCity);
                setNewCity("");
              }
            }}
          >
            <AddIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
