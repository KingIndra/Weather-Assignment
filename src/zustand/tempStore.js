import { create } from "zustand";

const useTempStore = create((set) => ({
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
}));

export default useTempStore;
