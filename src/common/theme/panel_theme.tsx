import { createMuiTheme } from "@material-ui/core/styles/index";
import { teal, blueGrey, red } from "@material-ui/core/colors";

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
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        error: {
            light: red[300],
            main: red[500],
            dark: red[700],
            contrastText: "#000",
        },
        common: {
            white: '#fff',
        },
    },
    direction: 'rtl',
});

export default Theme;
