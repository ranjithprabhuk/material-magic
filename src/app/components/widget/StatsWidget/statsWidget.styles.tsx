import { Theme } from '@material-ui/core';

export const statsWidgetStyles = (theme: Theme): any => ({
  icon: {
    background: theme.palette.primary.dark,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
    color: '#fff',
  },
  statContent: {
    padding: 12,
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '&:hover': {
      margin: 2,
    },
  },
  statValue: {
    fontWeight: 500,
    marginBottom: 10,
  },
  statTitle: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
});
