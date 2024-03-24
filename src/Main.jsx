import React from "react";
import ReactDOM from "react-dom/client";
import { DogApp } from "./DogApp";
import "./Main.css";

ReactDOM.createRoot( document.getElementById("root") ).render(
    <React.StrictMode>
        <DogApp/>
    </React.StrictMode>
);