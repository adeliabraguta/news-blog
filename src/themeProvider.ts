import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            500: "#1976d2",
            600: "#42a5f5",
            700: "#1565c0",
            contrastText: "#fff",
        },
        secondary: {
            500: "#dc004e",
        },
    },
});

export default theme;
