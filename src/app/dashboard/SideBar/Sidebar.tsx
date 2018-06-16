import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, List, Typography, Divider, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import { ISidebarProps } from './ISideBar';
import { sideBarStyles } from './sideBar.styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import {menuItems} from './menuItems';

// const NavigationMenu = ({classes}: any) => menuItems.map((menu) => {
//   return (
//     <NavLink to='/dashboard/home' activeClassName={classes.navigation}>
//       <ListItem button className={classes.menuItem}>
//         <ListItemIcon>
//           <InboxIcon />
//         </ListItemIcon>
//         <ListItemText className={classes.menuItemList} primary='Dashboard' />
//       </ListItem>
//     </NavLink>
//   );
// });

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
            {menuItems && menuItems.map((menu) =>
              <NavLink to='/dashboard/home' activeClassName={classes.navigation} key={`menu_${menu.id}`}>
              <ListItem button className={classes.menuItem}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText className={classes.menuItemList} primary={menu.title} />
              </ListItem>
            </NavLink>)}
              <ListItem button className={classes.menuItem} onClick={this.handleClick}>
                <ListItemIcon>
                  <StarBorder />
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
          </div>
        </List>
        <Divider />
      </Drawer>
    );
  }
}

export default withStyles(sideBarStyles, { withTheme: true })(SideBar);
