import { Theme } from '@material-ui/core';
import { ThemeConfig } from '../../../theme';

export const sideBarStyles = (theme: Theme): any => ({
  sideBar: {
    display: 'flex',
    width: ThemeConfig.sideBarWidth,
    marginRight: -ThemeConfig.sideBarWidth,
    transition: theme.transitions.create('margin', {
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  sideBarOpen: {
    marginRight: 0,
  },
});
