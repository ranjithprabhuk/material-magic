import { Theme } from '@material-ui/core';
import { ThemeConfig } from '../../../theme';

export const sideBarStyles = (theme: Theme): any => ({
  sideBar: {
    display: 'flex',
    width: ThemeConfig.sideBarWidth,
    marginRight: -ThemeConfig.sideBarWidth,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: theme.palette.primary.main,
  },
  sideBarOpen: {
    marginRight: 0,
    padding: theme.spacing.unit,
  },
});
