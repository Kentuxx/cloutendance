import React from "react";
import "./resources/styles/main.css";
import ReactDOM from "react-dom";
import App from "./routes/app";
import GlobalProvider from "./providers/global_provider/global.context";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
