import { createTheme } from '@mui/material/styles';

const theme = (mode: 'light' | 'dark' = 'light') =>
    createTheme({
        palette: {
            mode,
            primary: { main: '#000000' },
            secondary: { main: '#7c4dff' },
        },
        typography: {
            h1: {
                fontSize: 48,
                fontFamily: "Anonymous Pro",
                fontWeight: "bold",
                fontStyle: "italic"
            },
            h4: {
                fontSize: 24,
                fontFamily: "Inter",
                fontWeight: "normal",
            },
            fontFamily: ['Inter', 'system-ui', 'Arial', 'Anonymous Pro'].join(','),

        },
        components: {
            MuiButton: { styleOverrides: { root: { textTransform: 'none', borderRadius: 10 } } },
        },
    });

export default theme;
