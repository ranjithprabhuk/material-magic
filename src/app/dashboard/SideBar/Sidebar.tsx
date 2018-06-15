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
import { Link } from 'react-router-dom';
import { ISidebarProps } from './ISideBar';
import {sideBarStyles} from './sideBar.styles';

class SideBar extends React.Component<ISidebarProps, any> {
  public render(): React.ReactElement<SideBar> {
    const {classes, theme} = this.props;

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
        <Link to='/dashboard/home'>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
        </Link>
        <Link to='/dashboard/widgets'>
          <ListItem button>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary='Widgets' />
          </ListItem>
        </Link>
        <Link to='/dashboard/buttons'>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary='Buttons' />
          </ListItem>
        </Link>
        <Link to='/dashboard/charts'>
          <ListItem button>
            <ListItemIcon>
              <ReportIcon />
            </ListItemIcon>
            <ListItemText primary='Charts' />
          </ListItem>
        </Link>
      </div>
        </List>
        <Divider />
      </Drawer>
    );
  }
}

export default withStyles(sideBarStyles, {withTheme: true})(SideBar);
