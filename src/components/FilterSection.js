import React, { useState } from "react";

const FilterSection = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Filter items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "200px", marginBottom: "20px" }}
      />
    </div>
  );
};

export default FilterSection;
