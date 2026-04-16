import React from "react";

function Filters({ setFilter, filter }) {
  return (
    <div className="flex justify-evenly mb-5 flex-wrap gap-3 sm:gap-0">
      <button
        onClick={() => setFilter("All")}
        className={`py-1 px-4 rounded-md border-2 border-gray-50 bg-gray-50   ${filter === "All" ? "border border-red-400" : ""}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("Active")}
        className={`py-1 px-4 rounded-md border-2 border-gray-50 bg-gray-50   ${filter === "Active" ? "border border-red-400" : "bg-white"}`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("Completed")}
        className={`py-1 px-4 rounded-md border-2 border-gray-50 bg-gray-50   ${filter === "Completed" ? "border border-red-400" : "bg-white"}`}
      >
        Completed
      </button>
    </div>
  );
}

export default Filters;
