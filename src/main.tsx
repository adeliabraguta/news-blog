import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import App from "./App.tsx";

const theme = createTheme({
	palette: {
		primary: {
			main: "#1976d2",
		},
		secondary: {
			main: "#dc004e",
		},
	},
});

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter basename={"/news-blog/"}>
				<App />
				<ToastContainer />
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>,
);
