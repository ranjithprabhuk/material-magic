import { Theme } from '@material-ui/core';
import { ThemeConfig, flexDirection } from '../../../theme';

const drawerWidth = ThemeConfig.drawerWidth;

export const headerStyles = (theme: Theme): any => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: theme.direction === 'ltr' ? drawerWidth : 0,
    marginRight: theme.direction === 'rtl' ? drawerWidth : 0,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolBar: {
    flexDirection,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 12,
  },
  hide: {
    display: 'none',
  },
});
