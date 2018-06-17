import { Theme } from '@material-ui/core';
import { ThemeConfig, defineColours, flexDirection } from '../../../theme';

export const sideBarStyles = (theme: Theme): any => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: ThemeConfig.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    flexDirection,
  },
  menuItem: {
    borderRadius: 2,
    paddingLeft: 20,
    paddingRight: 3,
    margin: '6px 0px',
    flexDirection,
  },
  navigation: {
    '& $menuItem, & $nestedMenuItem': {
      background: defineColours(ThemeConfig.primaryColor),
      '& $icon, & $title span': {
        color: '#fff',
      },
    },
  },
  nestedMenuList: {
    marginBottom: 6,
    paddingBottom: 6,
  },
  nestedMenuItem: {
    backgroundColor: theme.palette.grey[300],
    borderRadius: 2,
    paddingLeft: 20,
    paddingRight: 3,
    margin: '6px 0px',
    flexDirection,
    transition: theme.transitions.create('padding', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  nestedMenuItemAlignment: {
    paddingLeft: theme.direction === 'ltr' ? 30 : 0,
    paddingRight: theme.direction === 'rtl' ? 15 : 0,
  },
  selectedMenu: {
    backgroundColor: theme.palette.grey[400],
  },
  icon: {
    color: theme.palette.grey[800],
    textAlign: theme.direction === 'ltr' ? 'left' : 'right',
  },
  title: {
    '& span': {
      color: theme.palette.grey[800],
    },
    textAlign: theme.direction === 'ltr' ? 'left' : 'right',
  },
  displayNone: {
    display: 'none',
  },
});
