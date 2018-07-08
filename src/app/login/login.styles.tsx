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
    border: '5px solid white',
    borderRadius: '50%',
    padding: 0,
    background: defineColours(ThemeConfig.primaryColor),
    marginTop: -50,
  },
  inputFields: {
    width: '100%',
  },
});
