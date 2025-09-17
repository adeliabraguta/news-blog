import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					100: "#42a5f5",
					500: "#1976d2",
					700: "#1565c0",
					contrastText: "#fff",
					main: "#1976d2",
				},
				secondary: {
					500: "#dc004e",
					main: "#dc004e",
				},
			},
		},
	},
});

export default theme;
