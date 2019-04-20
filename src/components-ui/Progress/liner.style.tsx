import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
          },
          progress: {
            margin: theme.spacing.unit * 2,
            color: '#00695c',
          },
          linearColorPrimary: {
            backgroundColor: '#b2dfdb',
          },
          linearBarColorPrimary: {
            backgroundColor: '#00695c',
          },
          facebook2: {
            color: '#6798e5',
            animationDuration: '550ms',
            position: 'absolute',
            left: 0,
          },
    });

export default styles;
