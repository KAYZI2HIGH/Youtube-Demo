import { createRoot } from "react-dom/client";
import { Context } from "./utils/Context.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Context children={<App />} />
);
