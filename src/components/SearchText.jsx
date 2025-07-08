import React, { useState } from "react";

const SearchText = () => {
  const [query, setQuery] = useState("");

  const data = [
    "Akshat",
    "John Doe",
    "Infinite Flight",
    "Jane Smith",
    "Group Flight",
    "Amsterdam",
    "New York",
  ];

  const filterData = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type Here..."
        className="px-4 py-2 border"
      />
      {query && (
        <ul>
          {filterData.length > 0 ? (
            filterData.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>No items found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchText;
