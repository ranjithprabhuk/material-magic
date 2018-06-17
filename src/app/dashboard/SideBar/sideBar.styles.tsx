import { Theme } from '@material-ui/core';
import { ThemeConfig, defineColours } from '../../../theme';

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
  },
  menuItem: {
    borderRadius: 2,
    paddingLeft: 20,
    boxShadow: '1px 2px 3px 1px #eee',
    margin: '6px 0px',
    flexDirection: theme.direction === 'ltr' ? 'row' : 'row-reverse',
  },
  navigation: {
    '& $menuItem, & $nestedMenuItems': {
      background: defineColours(ThemeConfig.primaryColor),
      boxShadow: '1px 2px 3px 1px #bbb',
      '& $icon, & $title span': {
        color: '#fff',
      },
    },
  },
  nestedMenuList: {
    marginBottom: 6,
    paddingBottom: 6,
    borderBottom: '1px solid #eee',
  },
  nestedMenuItems: {
    backgroundColor: theme.palette.grey[300],
    borderRadius: 2,
    paddingLeft: 20,
    boxShadow: '1px 2px 3px 1px #eee',
    margin: '6px 0px',
    flexDirection: theme.direction === 'ltr' ? 'row' : 'row-reverse',
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
