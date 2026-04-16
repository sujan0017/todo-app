import React, { useRef } from "react";

function AddTask({ onAdd }) {
  const inputElement = useRef("");

  const handelSubmit = (e) => {
    e.preventDefault();
    let input = inputElement.current.value;
    onAdd(input);
    inputElement.current.value = "";
  };

  return (
    <form onSubmit={(e) => handelSubmit(e)}>
      <div className="flex gap-2">
        <input
          className="p-1 w-4/5 border rounded-md"
          ref={inputElement}
          type="text"
          placeholder="Enter the Task"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 hover:text-white w-1/5  py-1 rounded-md float-end cursor-pointer"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTask;
