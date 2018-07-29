import { Theme } from '@material-ui/core';
import { ThemeConfig, flexDirection } from '../../../theme';

const {menuBarWidth} = ThemeConfig;

export const headerStyles = (theme: Theme): any => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: theme.direction === 'ltr' ? menuBarWidth : 0,
    marginRight: theme.direction === 'rtl' ? menuBarWidth : 0,
    width: `calc(100% - ${menuBarWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appTitle: {
    flex: theme.direction === 'ltr' ? 1 : 'none',
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
  containerRight: {
    flex: theme.direction === 'rtl' ? 1 : 'none',
  },
});
