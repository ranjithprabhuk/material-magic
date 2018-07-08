import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AsyncComponent from './AsyncComponent';
// import Login from './login';
// import Dashboard from './dashboard';

const NoMatch = () => <h1 style={{ color: 'red' }}>Page not found!</h1>;

const login = () => import('./login');
const dashboard = () => import('./dashboard');

export class App extends React.Component<object, object> {
  public render(): React.ReactElement<App> {
    return (
      <div>
        <Switch>
          <Route exact path='/login' component={() => <AsyncComponent moduleProvider={login} />} />
          <Route path='/dashboard' component={() => <AsyncComponent moduleProvider={dashboard} />} />
          <Redirect exact from='/' to='dashboard' />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
