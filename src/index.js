import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { TurnoProvider } from "./context/TurnoContext";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthContextProvider>
    <TurnoProvider>
      <Router>
        <App />
      </Router>
    </TurnoProvider>
  </AuthContextProvider>
);
