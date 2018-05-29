
import * as React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Login from './login';

const NoMatch = () => (
  <h1 style={{color:'red'}}>Page not found!</h1>
);

export class App extends React.Component<object, object> {
  public render(): React.ReactElement<App> {

    return (
        <div>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Redirect exact from='/' to='login' />
            <Route component={NoMatch}/>
          </Switch>
        </div>
    );
  }
}

export default App;
