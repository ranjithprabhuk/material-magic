import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, List, Typography, Divider, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import ReportIcon from '@material-ui/icons/Report';
import { Link, NavLink } from 'react-router-dom';
import { ISidebarProps } from './ISideBar';
import { sideBarStyles } from './sideBar.styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';

class SideBar extends React.Component<ISidebarProps, any> {
  constructor(props: ISidebarProps) {
    super(props);
    this.state = {
      open: false,
    };
  }

  public handleClick = () => {
    this.setState({ open: !this.state.open });
  }

  public render(): React.ReactElement<SideBar> {
    const { classes, theme } = this.props;

    return (
      <Drawer
        variant='permanent'
        classes={{
          paper: classNames(classes.drawerPaper, !this.props.isOpen && classes.drawerPaperClose),
        }}
        open={this.props.isOpen}
      >
        <div className={classes.toolbar}>
          <Typography variant='title' color='primary' noWrap>
            Material Magic
          </Typography>
          <IconButton onClick={() => this.props.handleDrawerClose()}>
            {theme && theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>
            <NavLink to='/dashboard/home' activeClassName={classes.navigation}>
              <ListItem button className={classes.menuItem}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText className={classes.menuItemList} primary='Dashboard' />
              </ListItem>
            </NavLink>
              <ListItem button className={classes.menuItem} onClick={this.handleClick}>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText className={classes.menuItemList} primary='Widgets' />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary='Starred' />
                  </ListItem>
                </List>
              </Collapse>
            <Link to='/dashboard/buttons'>
              <ListItem button className={classes.menuItem}>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText className={classes.menuItemList} primary='Buttons' />
              </ListItem>
            </Link>
            <Link to='/dashboard/charts'>
              <ListItem button className={classes.menuItem}>
                <ListItemIcon>
                  <ReportIcon />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.primary }} primary='Charts' />
              </ListItem>
            </Link>
          </div>
        </List>
        <Divider />
      </Drawer>
    );
  }
}

export default withStyles(sideBarStyles, { withTheme: true })(SideBar);
