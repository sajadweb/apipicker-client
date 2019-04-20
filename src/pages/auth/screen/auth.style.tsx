import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            marginTop: `${theme.spacing.unit * 8}px`,
            marginRight: `${theme.spacing.unit * 8}px`,
            marginLeft: `${theme.spacing.unit * 8}px`,
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

        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: "5%",
            marginRight: "5%",
            width: "90%",
        },
        dense: {
            marginTop: -5,
        },
        button: {
            marginTop: 15,
            marginBottom: 15,
            marginLeft: "5%",
            marginRight: "5%",
            width: "90%",
        },
        paper: {
            padding: theme.spacing.unit * 2,
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        fab: {
            margin: theme.spacing.unit,
        },
        paper_root: {
            padding: theme.spacing.unit * 2,
            textAlign: 'left',
            color: theme.palette.text.secondary,
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
          },
    });

export default styles;
