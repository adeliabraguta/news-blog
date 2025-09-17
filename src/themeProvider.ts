import { blue, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: blue[500],
			light: blue[300],
			dark: blue[700],
			contrastText: "#fff",
		},
		secondary: {
			main: red[500],
		},
	},
});

export default theme;
