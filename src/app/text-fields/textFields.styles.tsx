import { Theme } from '@material-ui/core';

export const textFieldStyles = (theme: Theme): any => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

