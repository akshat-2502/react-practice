import React, { useState } from "react";

const DropdownValueInTextbox = () => {
  const [dropdownValue, setDropdownValue] = useState("");

  return (
    <select name="Skills">
      <option value="React">React</option>
      <option value="Node">Node</option>
      <option value="Express">Express</option>
      <option value="MongoDB">MongoDB</option>
      <option value="Redux">Redux</option>
      <option value="React-Router">React-Router</option>
      <option value="JWT">JWT</option>
    </select>
  );
};

export default DropdownValueInTextbox;
