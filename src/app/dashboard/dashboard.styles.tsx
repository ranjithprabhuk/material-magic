import { Theme } from '@material-ui/core';
import { flexDirection } from '../../theme';

const settingsWidth: number = 270;

export const dashboardStyles = (theme: Theme): any => ({
  root:{
    display: 'flex',
    flexGrow: 1,
    zIndex: 1,
    overflowX: 'hidden',
    flexDirection,
  },
  dashboard: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection,
    transition: theme.transitions.create('margin', {
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  dashboardAside: {
    marginLeft: -settingsWidth,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit,
    marginTop: '72px',
  },
  settings: {
    display: 'flex',
    width: settingsWidth,
    marginRight: -settingsWidth,
    transition: theme.transitions.create('margin', {
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  settingsOpen: {
    marginRight: 0,
  },
});
