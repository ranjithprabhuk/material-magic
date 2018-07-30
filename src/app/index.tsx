import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import AsyncComponent from './AsyncComponent';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../theme';
import { IAppState } from '../Model';
import { updatePageContext } from '../theme/Theme';
import { ConnectedRouter } from 'react-router-redux';

const NoMatch = () => <h1 style={{ color: 'red' }}>Page not found!</h1>;

const login = () => import('./login');
const dashboard = () => import('./dashboard');

class App extends React.Component<any, any> {
  public static getDerivedStateFromProps(nextProps: any, prevState: any): any {
    console.log('sdadsad', nextProps, prevState);
    if (typeof prevState.pageContext === 'undefined') {
      return {
        theme,
      };
    }

    const { prevProps } = prevState;

    if (
      nextProps.uiTheme.paletteType !== prevProps.uiTheme.paletteType ||
      nextProps.uiTheme.paletteColors !== prevProps.uiTheme.paletteColors ||
      nextProps.uiTheme.direction !== prevProps.uiTheme.direction
    ) {
      return {
        prevProps: nextProps,
        theme: updatePageContext(nextProps.uiTheme),
      };
    }

    return null;
  }
  constructor(props: any, context: any) {
    super(props);
    this.state = {
      theme,
    };
  }

  public render(): React.ReactElement<App> {
    const { store, history } = this.props;

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
  uiTheme: state.theme,
}))(App);

export default materialMagic;
