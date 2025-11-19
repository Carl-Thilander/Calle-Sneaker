import { createTheme } from "@mui/material/styles";

const theme = (mode: "light" | "dark" = "light") =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#195330" },
      secondary: { main: "#ffffff" },
      background: {
        paper: mode === "light" ? "#ffffff" : "#251F1F",
      },
    },
    typography: {
      h1: {
        fontSize: 48,
        fontFamily: "Anonymous Pro",
        fontWeight: "bold",
        fontStyle: "italic",
      },
      h2: {
        fontSize: 64,
        fontFamily: "Roboto",
        fontWeight: "normal",
      },
      h3: {
        fontSize: 50,
        fontFamily: "Inter",
        fontWeight: "normal",
      },
      h4: {
        fontSize: 24,
        fontFamily: "Inter",
        fontWeight: "normal",
      },
      fontFamily: [
        "Inter",
        "system-ui",
        "Arial",
        "Roboto",
        "Anonymous Pro",
      ].join(","),
    },
    components: {
      MuiButton: {
        styleOverrides: { root: { textTransform: "none", borderRadius: 10 } },
      },
    },
  });

export default theme;
