import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
          },
          grow: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
              display: 'block',
            },
          },
          menuButton: {
            marginLeft: -12,
            marginRight: 20,
          },
          avatar: {
            // margin: 10,
            marginLeft:  12,
            marginRight: 20,
            height: '30px',
            width: '60px',
            display: 'none',
            [theme.breakpoints.up('sm')]: {
              display: 'block',
            },
        },
        typography: {
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '"Vazir-Light"',
          ].join(','),
        },
        list: {
          width: 250,
        },
        fullList: {
          width: 'auto',
        },
        bottom: {
          width:"100%",
          position: "relative",
          margin:"auto 0px 0px 0px",
          // bottom: "-0"
        },
        paper: { 
          ...theme.mixins.gutters(),
          paddingTop: theme.spacing.unit * 2,
          paddingBottom: theme.spacing.unit * 2,
          textAlign:"center",
          "& img": {
            // margin: 10,
            marginRight: -12,
            height: '60px',
            width: '100px',
        },
          "& h6,p": {
            textAlign:"end",
            
        },
      },
    });

export default styles;
