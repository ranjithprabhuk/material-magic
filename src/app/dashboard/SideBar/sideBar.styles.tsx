import { Theme } from '@material-ui/core';
import { ThemeConfig } from '../../../theme';

export const sideBarStyles = (theme: Theme): any => ({
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    width: ThemeConfig.sideBarWidth,
    marginRight: -ThemeConfig.sideBarWidth,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: theme.palette.primary.dark,
  },
  sideBarOpen: {
    marginRight: 0,
    padding: theme.spacing.unit,
  },
  sideBarHeader: {
    display: 'flex',
    margin: theme.spacing.unit * 1.25,
    justifyContent: 'space-between',
  },
  closeButton: {
    marginTop: -10,
  },
});
