import React from "react";
import { useSelector } from "react-redux";
import Todo from "./todo";

function TodosList() {
  const todosStore = useSelector((state) => state.todos);
  console.log(todosStore);

  return (
    <ul className="px-4 max-h-[500px] overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-transparent">
      {todosStore?.map((todo, index) => {
        console.log(todo);
        return <Todo key={index + 1} {...todo} index={index + 1} />;
      })}
    </ul>
  );
}

export default TodosList;
