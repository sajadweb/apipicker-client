import { createMuiTheme } from "@material-ui/core/styles/index";

const Theme = createMuiTheme({
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: '"Vazir-Light"!important'
      },
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ed4b82',
            main: '#e91e63',
            dark: '#a31545',
            contrastText: '#fff',
        },
        common: {
            white: '#fff',
        },
    },
    direction: 'rtl',
});

export default Theme;
