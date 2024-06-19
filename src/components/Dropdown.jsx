import React from "react";
import useCitiesAPI from "../api/cities";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Dropdown = () => {
  const { cities, addCity, removeCity, updateCity } = useCitiesAPI();
  const [hoveredCity, setHoveredCity] = React.useState(null);

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
                  <div>{city.name}</div>
                  {hoveredCity === city.id && (
                    <div className="flex items-center">
                      <div
                        className="hover:text-gray-500 pr-1"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <EditIcon fontSize="2" />
                      </div>
                      <div
                        className="hover:text-gray-500 pl-1"
                        onClick={(event) => {
                          event.stopPropagation();
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
      </div>
    </div>
  );
};

export default Dropdown;
