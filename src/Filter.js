import React from "react";

function Filter({ filterTitle, setFilterTitle, filterRate, setFilterRate }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Filter by title..."
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
        style={{ marginRight: 10, padding: 5 }}
      />
      <select
        value={filterRate}
        onChange={(e) => setFilterRate(Number(e.target.value))}
        style={{ padding: 5 }}
      >
        <option value={0}>All Ratings</option>
        <option value={1}>1 and up</option>
        <option value={2}>2 and up</option>
        <option value={3}>3 and up</option>
        <option value={4}>4 and up</option>
        <option value={5}>5 only</option>
      </select>
    </div>
  );
}

export default Filter;
