import "../App.css";
import Todo from "../components/todo";

function App() {
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
              placeholder="Add a task"
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <ul className="px-4 max-h-[500px] overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-transparent">
        <Todo />
        {/* <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo /> */}
      </ul>
    </div>
  );
}

export default App;
