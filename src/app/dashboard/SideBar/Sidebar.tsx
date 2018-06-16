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
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import { menuItems } from './menuItems';

class SideBar extends React.Component<ISidebarProps, ISidebarState> {
  constructor(props: ISidebarProps) {
    super(props);
    this.state = {
      navigationMenuItems: menuItems,
    };
  }

  public handleMenuClick = (menu: IMenuItems, index: number) => {
    if (menu.children && menu.children.length > 0) {
      const isMenuOpen = this.state.navigationMenuItems[index].isOpen;
      this.state.navigationMenuItems[index].isOpen = !isMenuOpen;
      this.forceUpdate();
    }
  }

  public renderNaviationMenu = (classes: any): any => {
    const { navigationMenuItems } = this.state;

    return (
      <List>
        <div>
          {navigationMenuItems && navigationMenuItems
            .map((menu, index) => this.renderMenuItem(menu, index))}
        </div>
      </List>
    );
  }

  public renderMenuItem = (menu: IMenuItems, index: number) => {
    const MenuItem = (
      <ListItem button className={this.props.classes.menuItem} onClick={() => this.handleMenuClick(menu, index)}>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText className={this.props.classes.menuItemList} primary={menu.title} />
        {menu.children && (menu.isOpen ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
    );
    if (menu.children) {
      return (
        <div>
          {MenuItem}
          {this.renderNestedMenuItems(this.props.classes, menu)}
        </div>
      );
    } else {
      return (
          <NavLink to={menu.path} activeClassName={this.props.classes.navigation} key={`menu_${menu.id}`}>
            {MenuItem}
          </NavLink>
      );
    }
  }

  public renderNestedMenuItems = (classes: any, nestedMenuItems: IMenuItems) => {
    return (
      nestedMenuItems.children &&
      nestedMenuItems.children.map(menu => (
        <Collapse in={nestedMenuItems.isOpen} timeout='auto' unmountOnExit  key={`menu_${menu.id}`}>
          <List component='div' disablePadding>
          <NavLink to={menu.path} activeClassName={this.props.classes.navigation} key={`menu_${menu.id}`}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary={menu.title} />
            </ListItem>
            </NavLink>
          </List>
        </Collapse>
      ))
    );
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
        {this.renderNaviationMenu(classes)}
        <Divider />
      </Drawer>
    );
  }
}

export default withStyles(sideBarStyles, { withTheme: true })(SideBar);
