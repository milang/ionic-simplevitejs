// core CSS required for Ionic components to work properly
import "@ionic/react/css/core.css";
// basic CSS for apps built with Ionic
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
// optional CSS utils that can be commented out
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import { setupIonicReact } from "@ionic/react";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

// initialize Ionic app
setupIonicReact();
const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
