import React from "react";
import useTempStore from "../zustand/tempStore";

const TemperatureToggle = () => {
  const { temp, toggle } = useTempStore();
  return (
    <div className="flex items-center gap-2 mb-4 justify-between">
      <p className="text-xl font-semibold">Weather Application (°{temp})</p>
      <input
        type="checkbox"
        className="toggle toggle-sm bg-blue-950 hover:bg-blue-900 border-blue-950 transform rotate-90"
        checked={temp === "C"}
        onChange={toggle}
      />
    </div>
  );
};

export default TemperatureToggle;
