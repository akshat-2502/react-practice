import React, { useEffect, useState } from "react";

const DebouncingSearch = () => {
  const [query, setQuery] = useState("");
  const [debounce, setDebounce] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(query);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (debounce) {
      console.log("API is called for : ", debounce);
    }
  }, [debounce]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Here"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </div>
  );
};

export default DebouncingSearch;
