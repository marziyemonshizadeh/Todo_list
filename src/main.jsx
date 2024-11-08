import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "../src/app/App";
import "../src/index.css";
import store from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
