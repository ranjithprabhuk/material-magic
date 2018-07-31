import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store } from 'redux';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';

import MaterialMagic from './app';
import './assets/scss/styles.scss';

declare const require: (name: String) => any;

export const history = createHashHistory();
export const store: Store<any> =
    process.env.NODE_ENV !== 'production'
        ? (require('./store/store.dev') as any).configureStore(history)
        : (require('./store/store.prod') as any).configureStore(history);


ReactDOM.render(
    <Provider store={store}>
        <MaterialMagic store={store} history={history} />
    </Provider>,
    document.getElementById('material-magic'),
);
