import create from "zustand";
import { persist } from "zustand/middleware";

const useTempStore = create(
  persist(
    (set) => ({
      temp: "C",

      toggle: () =>
        set((state) => ({
          temp: state.temp === "C" ? "F" : "C",
        })),

      city: "",

      setCity: (city) => set({ city }),

      lastSearchedCity: "",

      setLastSearchedCity: (lastSearchedCity) => set({ lastSearchedCity }),

      showDropdown: false,

      setShowDropdown: (showDropdown) => set({ showDropdown }),
    }),
    {
      name: "tempStore", // Name for the persisted state
      getStorage: () => localStorage, // Storage mechanism (localStorage in this case)
    }
  )
);

export default useTempStore;
