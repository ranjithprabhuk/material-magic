import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Settings from '@material-ui/icons/SettingsApplications';
import { IHeaderProps, IHeaderState } from './IHeader';
import { headerStyles } from './header.styles';
import { labels } from '../../../utils/app.constants';

class Header extends React.Component<IHeaderProps, IHeaderState> {
  public toggleSideBar(content: string): any {
    const { sideBarCurrentViewContent, isSideBarOpen, updateSideBarViewContent, toggleSideBar } = this.props;
    updateSideBarViewContent(content);
    if (!isSideBarOpen || sideBarCurrentViewContent === content) {
      toggleSideBar();
    }
  }

  public render(): React.ReactElement<Header> {
    const { classes, isMenuBarOpen, toggleMenuBar } = this.props;

    return (
      <AppBar position='absolute' className={classNames(classes.appBar, isMenuBarOpen && classes.appBarShift)}>
        <Toolbar disableGutters={!isMenuBarOpen} className={classes.toolBar}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={() => toggleMenuBar()}
            className={classNames(classes.menuButton, isMenuBarOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='title'
            color='inherit'
            noWrap
            className={classNames(isMenuBarOpen && classes.hide, classes.appTitle)}
          >
            {labels.appTitle}
          </Typography>
          <div className={classes.containerRight}>
            <IconButton onClick={() => this.toggleSideBar('User Profile')} color='inherit'>
              <AccountCircle />
            </IconButton>
            <IconButton onClick={() => this.toggleSideBar('Settings')} color='inherit'>
              <Settings />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(headerStyles, { withTheme: true })(Header);
