import { Theme } from '@material-ui/core';

export const buttonStyles = (theme: Theme): any => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    justifyContent: 'center',
  },
  panelHeader: {
    backgroundColor: '#eee',
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
