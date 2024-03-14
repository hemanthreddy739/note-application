import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NotesContextInfo from "./context/NotesContext";
import UserContextInfo from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <UserContextInfo>
      <NotesContextInfo>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </NotesContextInfo>
    </UserContextInfo>
  
);
