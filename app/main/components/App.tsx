
import * as React from 'react';
import MenuBar from './MenuBar';
import {CounterList} from '../../counterlist';
import {Route} from 'react-router-dom';
import {CounterListPage, HomePage} from './RoutePaths';
import Home from './Home';
import {RouteComponentProps, Switch} from 'react-router';

const NoMatch = () => (
  <h1 style={{color:'red'}}>Page not found!</h1>
);

export class App extends React.Component<object, object> {
  public render(): React.ReactElement<App> {

    return (
        <div>
          <MenuBar title='Title'/>
          <Switch>
            <Route exact path={HomePage} component={Home} />
            <Route exact path={CounterListPage} component={CounterList} />
            <Route component={NoMatch}/>
          </Switch>
        </div>
    );
  }
}

export default App;
