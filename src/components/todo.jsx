import React, { useState } from "react";

function Todo() {
  const [isComplatted, setIsComplatted] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsComplatted(e.target.checked);
  };
  return (
    <li className="bg-slate-100 rounded-md shadow-sm shadow-teal-500 my-3 p-2">
      <div className="flex items-center">
        <input
          id="todo1"
          name="todo1"
          type="checkbox"
          checked={isComplatted ? true : false}
          className="h-4 w-4 accent-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          onChange={(e) => handleCheckboxChange(e)}
        />
        <div className="ml-3 flex items-center gap-2 text-gray-900">
          <span
            className={`text-lg font-medium ${
              isComplatted ? "line-through" : ""
            }`}
          >
            Finish project proposal
          </span>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-2 rounded">
            delete
          </button>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-2 rounded">
            edit
          </button>
        </div>
      </div>
    </li>
  );
}

export default Todo;
