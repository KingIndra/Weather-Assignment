import { useState, useEffect } from "react";

const useCitiesAPI = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await fetch("http://localhost:4000/cities");
      if (!response.ok) {
        throw new Error("Failed to fetch cities");
      }
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const addCity = async (newCity) => {
    try {
      const response = await fetch("http://localhost:4000/cities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newCity }),
      });
      if (!response.ok) {
        throw new Error("Failed to add city");
      }
      fetchCities();
    } catch (error) {
      console.error("Error adding city:", error);
    }
  };

  const removeCity = async (cityId) => {
    try {
      const response = await fetch(`http://localhost:4000/cities/${cityId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to remove city");
      }
      fetchCities();
    } catch (error) {
      console.error("Error removing city:", error);
    }
  };

  const updateCity = async (cityId, newName) => {
    try {
      const response = await fetch(`http://localhost:4000/cities/${cityId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newName }),
      });
      if (!response.ok) {
        throw new Error("Failed to update city");
      }
      fetchCities();
    } catch (error) {
      console.error("Error updating city:", error);
    }
  };

  return { cities, addCity, removeCity, updateCity };
};

export default useCitiesAPI;
