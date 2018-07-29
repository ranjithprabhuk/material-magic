import { Theme } from '@material-ui/core';
import { ThemeConfig, defineColours } from '../../theme';

export const loginStyles = (theme: Theme): any => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    width: '100vw',
    height: '100vh',
    background: defineColours(ThemeConfig.primaryColor),
  },
  login: {
    width: '100%',
    maxWidth: '400px',
    overflow: 'visible',
  },
  socialLoginLabel: {
    backgroundColor: '#eee',
    padding: '2px 118px',
    marginTop: 10,
  },
  loginButtonContainer: {
    padding: '30px 5px 20px',
  },
  headerIconGrid: {
    border: `4px solid ${theme.palette.background.paper}`,
    borderRadius: '50%',
    padding: 0,
    background: defineColours(ThemeConfig.primaryColor),
    marginTop: -50,
  },
  headerIcon: {
    fontSize: 100,
    color: theme.palette.background.paper,
  },
  inputFields: {
    width: '100%',
  },
});
