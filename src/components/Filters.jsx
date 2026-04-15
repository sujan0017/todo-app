import React from "react";

function Filters({ setFilter, filter }) {
  return (
    <div className="flex justify-evenly mb-5">
      <button
        onClick={() => setFilter("All")}
        className={`py-1 px-4 rounded-md  ${filter === "All" ? "bg-amber-100" : "bg-white"}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("Active")}
        className={`py-1 px-4 rounded-md  ${filter === "Active" ? "bg-amber-100" : "bg-white"}`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("Completed")}
        className={`py-1 px-4 rounded-md  ${filter === "Completed" ? "bg-amber-100" : "bg-white"}`}
      >
        Completed
      </button>
    </div>
  );
}

export default Filters;
