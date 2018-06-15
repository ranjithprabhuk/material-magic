import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from './menuItems';
import { dashboardStyles } from './dashboard.styles';
import { IDashboardProps, IDashboardState } from './IDashboard';
import Home from '../home';
import Charts from '../charts';
import Buttons from '../buttons';
import { Route, Redirect } from 'react-router-dom';

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

  public renderAppHeader = (classes: any) => {
    return (
      <AppBar position='absolute' className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
        <Toolbar disableGutters={!this.state.open}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={this.handleDrawerOpen}
            className={classNames(classes.menuButton, this.state.open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='title' color='inherit' noWrap className={classNames(this.state.open && classes.hide)}>
            Material Magic
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }

  public renderSidebar = (classes: any) => {
    return (
      <Drawer
        variant='permanent'
        classes={{
          paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
        }}
        open={this.state.open}
      >
        <div className={classes.toolbar}>
          <Typography variant='title' color='primary' noWrap>
            Material Magic
          </Typography>
          <IconButton onClick={this.handleDrawerClose}>
            {this.props.theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </Drawer>
    );
  }

  public render(): React.ReactElement<Dashboard> {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.renderAppHeader(classes)}
        {this.renderSidebar(classes)}
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <div style={{ width: '100%' }}>
              <Route exact path='/dashboard/home' component={Home} />
              <Route exact path='/dashboard/charts' component={Charts} />
              <Route exact path='/dashboard/buttons' component={Buttons} />
              <Redirect exact from='/dashboard' to='dashboard/home' />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(dashboardStyles, { withTheme: true })(Dashboard);
