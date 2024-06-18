import React, { useState, useEffect } from "react";
import axios from "axios";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const API_URL = "http://localhost:3001";

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(`${API_URL}/cities`);
      setFavorites(response.data);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  const addToFavorites = async (city) => {
    try {
      await axios.post(`${API_URL}/cities`, { name: city });
      fetchFavorites();
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  const removeFromFavorites = async (id) => {
    try {
      await axios.delete(`${API_URL}/cities/${id}`);
      fetchFavorites();
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((city) => (
          <li key={city.id}>
            {city.name}
            <button onClick={() => removeFromFavorites(city.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
