import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { dashboardStyles } from './dashboard.styles';
import { IDashboardProps, IDashboardState } from './IDashboard';
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './SideBar';
import Header from './Header';
import AsyncComponent from '../AsyncComponent';
import MenuBar from './MenuBar';

const home = () => import('../home');
const widgets = () => import('../widgets');
const charts = () => import('../charts');
const buttons = () => import('../buttons');
const icons = () => import('../icons');
const forms = () => import('../forms');
const textFields = () => import('../text-fields');

class Dashboard extends React.Component<IDashboardProps, IDashboardState> {
  constructor(props: IDashboardProps, context: any) {
    super(props, context);
    this.state = {
      isMenuBarOpen: false,
      isSideBarOpen: false,
    };
  }

  public toggleMenuBar = () => {
    this.setState({ isMenuBarOpen: !this.state.isMenuBarOpen });
  }

  public toggleSideBar = () => {
    this.setState({ isSideBarOpen: !this.state.isSideBarOpen });
  }

  public render(): React.ReactElement<Dashboard> {
    const { classes } = this.props;
    const { isMenuBarOpen, isSideBarOpen } = this.state;

    return (
      <div className={classes.root}>
        <div className={classNames(classes.dashboard, isSideBarOpen && classes.sideBarOpen)}>
          <Header
            isMenuBarOpen={isMenuBarOpen}
            isSideBarOpen={isSideBarOpen}
            toggleMenuBar={this.toggleMenuBar}
            toggleSideBar={this.toggleSideBar}
          />
          <MenuBar isMenuBarOpen={isMenuBarOpen} toggleMenuBar={this.toggleMenuBar} />
          <main className={classes.content}>
            <div className={classes.toolbar}>
              <div style={{ width: '100%' }}>
                <Switch>
                  <Route exact path='/dashboard/home' component={() => <AsyncComponent moduleProvider={home} />} />
                  <Route exact path='/dashboard/widgets' component={() => <AsyncComponent moduleProvider={widgets} />} />
                  <Route exact path='/dashboard/charts' component={() => <AsyncComponent moduleProvider={charts} />} />
                  <Route exact path='/dashboard/buttons' component={() => <AsyncComponent moduleProvider={buttons} />} />
                  <Route exact path='/dashboard/icons' component={() => <AsyncComponent moduleProvider={icons} />} />
                  <Route exact path='/dashboard/form-elements/forms' component={() => <AsyncComponent moduleProvider={forms} />} />
                  <Route exact path='/dashboard/form-elements/text-fi' component={() => <AsyncComponent moduleProvider={textFields} />} />
                  <Redirect path='/dashboard' to='/dashboard/home' />
                </Switch>
              </div>
            </div>
          </main>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default withStyles(dashboardStyles, { withTheme: true })(Dashboard);
