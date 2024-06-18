import { create } from "zustand";

const useTempStore = create((set) => ({
  temp: "C",
  toggle: () =>
    set((state) => ({
      temp: state.temp === "C" ? "F" : "C",
    })),
}));

export default useTempStore;
