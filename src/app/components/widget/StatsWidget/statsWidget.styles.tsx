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
    transition: theme.transitions.create(['margin', 'transform'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '&:hover': {
      transform: 'scale(1.025)',
      overflow: 'hidden',
      margin: '-8px 8px 8px -8px',
    },
  },
});
