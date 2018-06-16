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
import { ISidebarProps, IMenuItems, ISidebarState } from './ISideBar';
import { sideBarStyles } from './sideBar.styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { menuItems } from './menuItems';

class SideBar extends React.Component<ISidebarProps, ISidebarState> {
  constructor(props: ISidebarProps) {
    super(props);
    this.state = {
      navigationMenuItems: menuItems,
    };
  }

  public handleMenuClick(menu: IMenuItems, index: number): void {
    if (menu.children && menu.children.length > 0) {
      const isMenuOpen = this.state.navigationMenuItems[index].isOpen;
      this.state.navigationMenuItems[index].isOpen = !isMenuOpen;
    } else {
      this.state.navigationMenuItems.forEach(menuItem => {
        menuItem.isOpen = false;
      });
    }
    this.forceUpdate();
  }

  public renderNavigationMenu(): React.ReactElement<any> {
    const { navigationMenuItems } = this.state;

    return (
      <List>
        <div style={{margin: 5}}>
          {navigationMenuItems && navigationMenuItems.map((menu, index) => this.renderMenuItem(menu, index))}
        </div>
      </List>
    );
  }

  public renderMenuItem(menu: IMenuItems, index: number): React.ReactElement<any> {
    const { classes } = this.props;
    const menuItem = (
      <ListItem
        button
        className={classNames(classes.menuItem, menu.isOpen && classes.selectedMenu)}
        onClick={() => this.handleMenuClick(menu, index)}
      >
        <ListItemIcon>{menu.icon}</ListItemIcon>
        <ListItemText primary={menu.title} />
        {menu.children && (menu.isOpen ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
    );

    if (menu.children) {
      return (
        <div key={`menu_${menu.id}`}>
          {menuItem}
          <Collapse in={menu.isOpen} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              {this.renderNestedMenuItems(menu.children)}
            </List>
          </Collapse>
        </div>
      );
    } else {
      return (
        <NavLink to={menu.path} activeClassName={classes.navigation} key={`menu_${menu.id}`}>
          {menuItem}
        </NavLink>
      );
    }
  }

  public renderNestedMenuItems(nestedMenuItems: IMenuItems[]): any {
    const { classes } = this.props;

    return nestedMenuItems.map(menu => (
      <NavLink to={menu.path} activeClassName={classes.navigation} key={`menu_${menu.id}`}>
        <ListItem button className={classes.nestedMenuItems}>
          <ListItemIcon>{menu.icon}</ListItemIcon>
          <ListItemText inset primary={menu.title} />
        </ListItem>
      </NavLink>
    ));
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
        {this.renderNavigationMenu()}
        <Divider />
      </Drawer>
    );
  }
}

export default withStyles(sideBarStyles, { withTheme: true })(SideBar);
