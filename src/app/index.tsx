import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import AsyncComponent from './AsyncComponent';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { IAppState } from '../Model';
import { getTheme } from '../theme/Theme';
import { ConnectedRouter } from 'react-router-redux';
import { ThemeConfig } from '../theme';

const theme = getTheme(ThemeConfig);
const NoMatch = () => <h1 style={{ color: 'red' }}>Page not found!</h1>;

const login = () => import('./login');
const dashboard = () => import('./dashboard');

class App extends React.Component<any, any> {
  public static getDerivedStateFromProps(nextProps: any, prevState: any): any {
    if (typeof prevState.theme === 'undefined') {
      return { theme };
    }

    if (nextProps.location) {
      return { theme: getTheme(nextProps.themeConfig), updateComponent: true };
    }

    return { theme: getTheme(nextProps.themeConfig) };
  }
  constructor(props: any, context: any) {
    super(props);
    this.state = {
      theme,
      updateComponent: false,
    };
  }

  public shouldComponentUpdate(nextProps: any): boolean {
    return this.state.updateComponent;
  }

  public render(): React.ReactElement<App> {
    const { store, history} = this.props;

    return (
      <MuiThemeProvider theme={this.state.theme}>
        <ConnectedRouter store={store} history={history}>
          <div>
            <Switch>
              <Route exact path='/login' component={() => <AsyncComponent moduleProvider={login} />} />
              <Route path='/dashboard' component={() => <AsyncComponent moduleProvider={dashboard} />} />
              <Redirect exact from='/' to='dashboard' />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </ConnectedRouter>
      </MuiThemeProvider>
    );
  }
}

const materialMagic: any = connect((state: IAppState) => ({
  ...state.routing,
  themeConfig: state.theme,
}))(App);

export default materialMagic;
