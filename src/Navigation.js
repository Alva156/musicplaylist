import React from "react";

function Navigation({ query, setQuery }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Music App</h1>
      <input
        className="search"
        type="text"
        placeholder="Search music..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
}

export default Navigation;
