import { Theme } from '@material-ui/core';

export const userProfileStyles = (theme: Theme): any => ({
  root: {
    width: '100%',
  },
  card: {
    display: 'flex',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing.unit,
  },
  userImage: {
    width: 90,
    height: 90,
  },
});
