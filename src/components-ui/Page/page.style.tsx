import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { Const } from '../../common';

const styles = (theme: Theme) =>
    createStyles({
        root: { 
            maxWidth:Const.maxWidth,
            margin: `0px auto 0px auto`,
            padding: theme.spacing.unit,
            paddingTop: theme.spacing.unit * 10,
        },
        paper: { 
            ...theme.mixins.gutters(),
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
        },
        appBar: {
            position: 'relative',
          },
          flex: {
            flex: 1,
          },
    });

export default styles;
