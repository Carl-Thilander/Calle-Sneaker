import { createTheme } from '@mui/material/styles';

const theme = (mode: 'light' | 'dark' = 'light') =>
    createTheme({
        palette: {
            mode,
            primary: { main: '#1e88e5' },
            secondary: { main: '#7c4dff' },
        },
        typography: {
            fontFamily: ['Inter', 'system-ui', 'Arial'].join(','),
        },
        components: {
            MuiButton: { styleOverrides: { root: { textTransform: 'none', borderRadius: 10 } } },
        },
    });

export default theme;
