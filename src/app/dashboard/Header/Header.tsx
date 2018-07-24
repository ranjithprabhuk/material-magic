import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Settings from '@material-ui/icons/SettingsApplications';
import { IHeaderProps } from './IHeader';
import { headerStyles } from './header.styles';
import { labels } from '../../../utils/app.constants';
import { Link } from 'react-router-dom';

class Header extends React.Component<IHeaderProps, any> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
    };
  }

  public handleChange = (event: any, checked: any): any => {
    this.setState({ auth: checked });
  }

  public handleMenu = (event: any): any => {
    this.setState({ anchorEl: event.currentTarget });
  }

  public handleSidebar = (): any => {
    console.log('sidebar clicked');
  }

  public handleClose = (): any => {
    this.setState({ anchorEl: null });
  }

  public render(): React.ReactElement<Header> {
    const { classes, isSidebarOpen, toggleSettings } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <AppBar position='absolute' className={classNames(classes.appBar, isSidebarOpen && classes.appBarShift)}>
        <Toolbar disableGutters={!isSidebarOpen} className={classes.toolBar}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={() => this.props.handleDrawerOpen()}
            className={classNames(classes.menuButton, isSidebarOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='title' color='inherit' noWrap className={classNames(isSidebarOpen && classes.hide, classes.appTitle)}>
            {labels.appTitle}
          </Typography>
          <div className={classes.containerRight}>
            <IconButton
              aria-haspopup='true'
              onClick={this.handleMenu}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              aria-haspopup='true'
              onClick={() => toggleSettings()}
              color='inherit'
            >
              <Settings />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link to='/login'>Logout</Link>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(headerStyles, { withTheme: true })(Header);
