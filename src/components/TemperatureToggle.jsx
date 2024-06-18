import React from "react";

const TemperatureToggle = ({ isCelsius, onToggle }) => {
  return (
    <div>
      <button onClick={onToggle}>
        Toggle Temperature Unit: {isCelsius ? "Celsius" : "Fahrenheit"}
      </button>
    </div>
  );
};

export default TemperatureToggle;
