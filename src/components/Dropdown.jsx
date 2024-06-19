import React, { useState } from "react";
import useCitiesAPI from "../api/cities";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import useTempStore from "../zustand/tempStore";

const Dropdown = () => {
  const { setShowDropdown, setCity } = useTempStore();
  const { cities, addCity, removeCity, updateCity } = useCitiesAPI();
  const [hoveredCity, setHoveredCity] = React.useState(null);
  const [newCity, setNewCity] = React.useState("");
  const [cityEditing, setCityEditing] = React.useState("");
  const editElement = React.useRef(null);

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
                onClick={async () => {
                  setShowDropdown(false);
                  //   await fetchWeather(city.name);
                  setCity(city.name);
                }}
              >
                <div className="flex justify-between items-center">
                  {cityEditing === city.id ? (
                    <input
                      ref={editElement}
                      className="outline-none bg-transparent"
                      type="text"
                      value={city.name}
                      onChange={(event) => {
                        const newName = event.target.value;
                        updateCity(city.id, newName);
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          setCityEditing("");
                          event.target.blur();
                        }
                      }}
                      onBlur={() => {
                        updateCity(city.id, city.name);
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    />
                  ) : (
                    <div
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          setCityEditing("");
                          updateCity(city.id, city.name);
                        }
                      }}
                    >
                      {city.name}
                    </div>
                  )}
                  {hoveredCity === city.id && (
                    <div className="flex items-center">
                      <div
                        className="hover:text-gray-500 pr-1"
                        onClick={(event) => {
                          event.stopPropagation();
                          setCityEditing(city.id);
                          setTimeout(() => {
                            editElement.current.focus();
                          }, 0);
                        }}
                      >
                        <EditIcon fontSize="2" />
                      </div>

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

          <input
            className="outline-none bg-transparent w-full"
            type="text"
            value={newCity}
            onChange={(event) => {
              setNewCity(event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
