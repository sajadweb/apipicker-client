import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme) =>
    createStyles({
        continuer: {
            maxWidth: 1200,
            margin: `${theme.spacing.unit * 8}px auto`,
            paddingLeft: theme.spacing.unit,
            paddingRight: theme.spacing.unit,
        },
    });

export default styles;
