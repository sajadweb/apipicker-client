import { createMuiTheme } from "@material-ui/core/styles/index";

const Theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            light: '#ed4b82',
            main: '#e91e63',
            dark: '#a31545',
            contrastText: '#fff',
        },
        secondary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        common: {
            white: '#fff'
        },
    },
    direction: 'rtl',
});

export default Theme;
