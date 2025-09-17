import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: "#1976d2",
					light: "#42a5f5",
					dark: "#1565c0",
					contrastText: "#fff",
				},
				secondary: {
					main: "#dc004e",
				},
			},
		},
	},
});

export default theme;
