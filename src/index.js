import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataLayer } from "./Context/DataLayer";
import reducer, {initialState} from './Context/reducer'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
);