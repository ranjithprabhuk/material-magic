import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Store} from 'redux';
import {Provider} from 'react-redux';
import {createHashHistory}  from 'history';
import {ConnectedRouter} from 'react-router-redux';
import {App, IAppState} from './main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './muiTheme';

declare const require: (name: String) => any;

const history = createHashHistory();
const store: Store<IAppState> = (process.env.NODE_ENV !== 'production')
        ? (require('./store.dev') as any).configureStore(history)
        : (require('./store.prod') as any).configureStore(history);

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <ConnectedRouter store={store} history={history}>
          <App/>
        </ConnectedRouter>
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('app'),
);
