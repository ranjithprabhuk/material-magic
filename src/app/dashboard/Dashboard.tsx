import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { dashboardStyles } from './dashboard.styles';
import { IDashboardProps, IDashboardState } from './IDashboard';
import Home from '../home';
import Charts from '../charts';
import Buttons from '../buttons';
import Icons from '../icons';
import Forms from '../forms';
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './SideBar';
import Header from './Header';


class Dashboard extends React.Component<IDashboardProps, IDashboardState> {
  constructor(props: IDashboardProps, context: any) {
    super(props, context);
    this.state = {
      open: false,
    };
  }

  public handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  public handleDrawerClose = () => {
    this.setState({ open: false });
  }

  public render(): React.ReactElement<Dashboard> {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header isSidebarOpen={this.state.open} handleDrawerOpen={this.handleDrawerOpen} />
        <Sidebar isSidebarOpen={this.state.open} handleDrawerClose={this.handleDrawerClose} />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <div style={{ width: '100%' }}>
              <Switch>
                <Route exact path='/dashboard/home' component={Home} />
                <Route exact path='/dashboard/charts' component={Charts} />
                <Route exact path='/dashboard/buttons' component={Buttons} />
                <Route exact path='/dashboard/icons' component={Icons} />
                <Route exact path='/dashboard/widgets' component={Home} />
                <Route exact path='/dashboard/form-elements/forms' component={Forms} />
                <Redirect path='/dashboard' to='/dashboard/home' />
              </Switch>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(dashboardStyles, { withTheme: true })(Dashboard);
