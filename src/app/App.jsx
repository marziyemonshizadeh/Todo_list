import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import TodosList from "../components/todosList";
import { addTodo } from "../redux/store/todos";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(
        addTodo({
          id: Math.floor(Math.random() * 100),
          title: e.target.value,
          isCompleted: false,
        })
      );
      e.target.value = "";
    }
  };
  return (
    <div className="h-screen bg-slate-200 flex flex-col justify-center items-center">
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase text-center">
          To-Do List
        </h1>
      </div>
      <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
        <form className="w-full max-w-sm mx-auto px-4 py-2">
          <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Type a text & press Enter"
              onKeyDown={handleKeyEnter}
              required
            />
          </div>
        </form>
      </div>
      {todos?.length > 0 ? (
        <TodosList />
      ) : (
        <div className="my-4">todo is empty please add todo :)</div>
      )}
    </div>
  );
}

export default App;
