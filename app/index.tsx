import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import { App, IAppState } from './main';
import { MuiThemeProvider, createMuiTheme, Theme } from '@material-ui/core/styles';
import { purple, green } from '@material-ui/core/colors';

const theme: Theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});

declare const require: (name: String) => any;

const history = createHashHistory();
const store: Store<IAppState> = (process.env.NODE_ENV !== 'production')
  ? (require('./store.dev') as any).configureStore(history)
  : (require('./store.prod') as any).configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter store={store} history={history}>
        <App />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
