import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { IHeaderProps } from './IHeader';
import { headerStyles } from './header.styles';
import { labels } from '../../../utils/app.constants';

class Header extends React.Component<IHeaderProps, any> {
  public render(): React.ReactElement<Header> {
    const { classes, isSidebarOpen } = this.props;

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
          <Typography variant='title' color='inherit' noWrap className={classNames(isSidebarOpen && classes.hide)}>
            {labels.appTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(headerStyles, { withTheme: true })(Header);
