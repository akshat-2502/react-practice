import React, { useState } from "react";

const DropdownValueInTextbox = () => {
  const [dropdownValue, setDropdownValue] = useState("");

  return (
    <div className="px-5 py-10">
      <select
        className="border p-1 mr-10"
        onChange={(e) => setDropdownValue(e.target.value)}
      >
        <option>Select Skill</option>
        <option value="React">React</option>
        <option value="Node">Node</option>
        <option value="Express">Express</option>
        <option value="MongoDB">MongoDB</option>
        <option value="Redux">Redux</option>
        <option value="React-Router">React-Router</option>
        <option value="JWT">JWT</option>
      </select>

      <input type="text" value={dropdownValue} className="border" />
    </div>
  );
};

export default DropdownValueInTextbox;
