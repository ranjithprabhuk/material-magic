import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { IHeaderProps } from './IHeader';
import { headerStyles } from './header.styles';

class Header extends React.Component<IHeaderProps, any> {
  public render(): React.ReactElement<Header> {
    const { classes } = this.props;

    return (
      <AppBar position='absolute' className={classNames(classes.appBar, this.props.isOpen && classes.appBarShift)}>
        <Toolbar disableGutters={!this.props.isOpen}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={() => this.props.handleDrawerOpen()}
            className={classNames(classes.menuButton, this.props.isOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='title' color='inherit' noWrap className={classNames(this.props.isOpen && classes.hide)}>
            Material Magic
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(headerStyles, { withTheme: true })(Header);
