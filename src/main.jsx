import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/pretendard/100.css";
import "@fontsource/pretendard/200.css";
import "@fontsource/pretendard/300.css";
import "@fontsource/pretendard/400.css";
import "@fontsource/pretendard/500.css";
import "@fontsource/pretendard/600.css";
import "@fontsource/pretendard/700.css";
import "@fontsource/pretendard/800.css";
import "@fontsource/pretendard/900.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
