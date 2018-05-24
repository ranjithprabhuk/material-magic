import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import { HelloComponent } from './app';
import { MuiThemeProvider, createMuiTheme, Theme } from '@material-ui/core/styles';
import { purple, green, indigo, pink, red, lime, lightGreen, deepPurple } from '@material-ui/core/colors';

const theme: Theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: lightGreen,
    error: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

declare const require: (name: String) => any;

const history = createHashHistory();
const store: Store<any> = (process.env.NODE_ENV !== 'production')
  ? (require('./store/store.dev') as any).configureStore(history)
  : (require('./store/store.prod') as any).configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter store={store} history={history}>
        <HelloComponent />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
