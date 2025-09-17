import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import App from "./App.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
	<StrictMode>
		<BrowserRouter basename={import.meta.env.VITE_BASE_PATH || "/news-blog/"}>
			<App />
			<ToastContainer />
		</BrowserRouter>
	</StrictMode>,
);
