import React, { useState } from "react";

const fruits = [
  { id: 1, label: "Apple" },
  { id: 2, label: "Mango" },
  { id: 3, label: "Grapes" },
  { id: 4, label: "Banana" },
  { id: 5, label: "Watermelon" },
  { id: 6, label: "Orange" },
];

const FruitsRadion = () => {
  const [selectedFruit, setSelectedFruit] = useState("");
  return (
    <div className="flex flex-col">
      {fruits.map((fruit) => (
        <label key={fruit.id}>
          {fruit.label}
          <input
            type="radio"
            name="fruit"
            value={fruit.label}
            checked={selectedFruit === fruit.label}
            onChange={() => setSelectedFruit(fruit.label)}
          />
        </label>
      ))}
      <input
        className="border p-2 w-40"
        type="text"
        readOnly
        value={selectedFruit}
      />
    </div>
  );
};

export default FruitsRadion;
