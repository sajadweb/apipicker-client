import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from './theme/base_theme'
import RtlProvider  from './right/right_provider'


function WithPanelRoot<P>(Component: React.ComponentType<P>) {
  function WithPanelRoot(props: P) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <RtlProvider>
        <MuiThemeProvider theme={Theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...props} />
        </MuiThemeProvider>
      </RtlProvider>
    );
  }

  return WithPanelRoot;
}

export default WithPanelRoot;