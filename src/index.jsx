import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./context/authContext";
import { GlobalStyle } from "./global/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <GlobalStyle />
    <App />
  </AuthProvider>
);