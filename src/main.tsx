import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import { App } from "./app.tsx";
import { registerServiceWorker } from "./utils/service-worker";

// Registrar Service Worker para cache offline
registerServiceWorker();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
