import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./redux/Store";
import { ThemeProvider } from "./components/theme-provider";
import App from "./App.tsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider storageKey="vite-ui-theme" defaultTheme="dark">
        <App />
      </ThemeProvider>
    </Provider>
    
  </StrictMode>
);
