import { Theme } from '@material-ui/core';

const drawerWidth = 240;

export const sideBarStyles = (theme: Theme): any => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  navigation: {
    '& div, & div & div': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      transition: theme.transitions.create(['margin', 'border'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    '&:hover': {
      '& div & div, & div': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
  nested: {
    backgroundColor: theme.palette.grey[300],
  },
  menuItem: {
    borderRadius: 2,
    paddingLeft: 20,
    boxShadow: '1px 2px 3px 1px #eee',
    margin: '6px 0px',
  },
});
