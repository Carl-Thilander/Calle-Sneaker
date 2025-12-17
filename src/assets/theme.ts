import { createTheme } from "@mui/material/styles";

const theme = (mode: "light" | "dark" = "light") =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#38C774" },
      secondary: { main: "#ffff" },
      background: {
        default: mode === "light" ? "#ffffffff" : "#221b1bff", //Ask about this change
        paper: mode === "light" ? "#d6ceceff" : "#251F1F",
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
      MuiCssBaseline: {
        styleOverrides: (themeParam) => ({
          body: {
            backgroundColor: themeParam.palette.background.default,
          },
          main: {
            backgroundColor: themeParam.palette.background.default,
          },
        }),
      },
    },
  });

export default theme;
