import { Theme } from '@material-ui/core';

export const settingsStyles = (theme: Theme): any => ({
  root: {
    width: '100%',
  },
  card: {
    display: 'flex',
  },
  iconGrid: {
    justifyContent: 'center',
  },
  activeTheme: {
    backgroundColor: theme.palette.grey[400],
  },
});
