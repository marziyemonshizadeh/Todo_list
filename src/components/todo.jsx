import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  editTodo,
  removeTodo,
  toggleCompletedTodo,
} from "../redux/store/todos";

function Todo({ title, isCompleted, id, index }) {
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };
  const handleCompleted = () => {
    dispatch(toggleCompletedTodo(id));
  };
  const handleUpdate = () => {
    setIsEditable(!isEditable);
    dispatch(editTodo({ id: id, title: inputRef.current.value }));
  };

  return (
    <li className="bg-slate-100 rounded-md shadow-sm shadow-teal-500 my-3 p-2">
      <div className="flex items-center justify-between gap-4">
        <div className="ml-3 flex items-center gap-2 text-gray-900">
          <span>{index}</span>
          {isEditable ? (
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Type New Title"
              defaultValue={title}
              ref={inputRef}
            />
          ) : (
            <span
              className={`text-lg font-medium ${
                isCompleted ? "line-through" : ""
              }`}
            >
              {title}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <button
            className="bg-red-400 hover:bg-red-500 text-white font-bold px-2 rounded"
            onClick={() => handleRemoveTodo()}
          >
            delete
          </button>
          <button
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-2 rounded"
            onClick={() => handleCompleted()}
          >
            {isCompleted ? <>unCompleted</> : <>Completed</>}
          </button>
          <button
            className="bg-purple-400 hover:bg-purple-500 text-white font-bold px-2 rounded"
            onClick={() => handleUpdate()}
          >
            {isEditable ? <>save</> : <>edit</>}
          </button>
        </div>
      </div>
    </li>
  );
}

export default Todo;
