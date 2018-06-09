import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles, Theme } from '@material-ui/core/styles';
import {Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import { layoutStyles } from './layout.styles';
import { ILayoutProps, ILayoutState } from './layout.interface';

class Layout extends React.Component<ILayoutProps, ILayoutState> {
  constructor(props:ILayoutProps, context:any) {
    super(props, context);
    this.state = {open: false};
  }

  public handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  public handleDrawerClose = () => {
    this.setState({ open: false });
  }

  public render(): React.ReactElement<Layout> {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position='absolute'
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='title' color='inherit' noWrap>
              Mini variant drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant='permanent'
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
        </main>
      </div>
    );
  }
}

export default withStyles(layoutStyles, { withTheme: true })(Layout);
