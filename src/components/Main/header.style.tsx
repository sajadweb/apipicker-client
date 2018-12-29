import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        header: {
            maxWidth: 1200,
            margin: `0px auto 0px auto`,
        },
        //menu
        menu: {
            padding: theme.spacing.unit,
            display: 'block',
            height: "45px",
            "list-style-type": "none",
            "margin": 0,
            "overflow": 'hidden',
        },
        li: {
            float: 'left',
        },

        lia: {
            display: 'block',
            color: 'black',
            textAlign: 'center',
            padding: '14px 16px',
            textDecoration: 'none',
        },
        // end menu
        footer: {
            padding: theme.spacing.unit * 3,
            backgroundColor: "#333",
            color: theme.palette.grey[100],
            border: "none",
            borderRadius: "0px",
            // height: "100px",
        },
        footer_container: {
            maxWidth: 1200,
            margin: `${theme.spacing.unit}px auto`,
            textAlign: 'center'
            // height: "100px",
        },
        continuer: {
            maxWidth: 1200,
            margin: `${theme.spacing.unit * 8}px auto`,
        },
        avatar: {
            margin: 10,
            height: '40px',
            width: '120px',
        },
    });

export default styles;
