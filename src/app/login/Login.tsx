import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, Grid, TextField, CardHeader, CardContent } from '@material-ui/core';
import { loginStyles } from './login.styles';
import { ILoginProps, ILoginState } from './ILogin';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';

class Home extends React.Component<ILoginProps, ILoginState> {
  public render(): React.ReactElement<Home> {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.login}>
        <CardHeader> Login </CardHeader>
          <CardContent>
            <Grid container spacing={8} alignItems='flex-end'>
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id='username' label='Username' />
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems='flex-end'>
              <Grid item>
                <Lock />
              </Grid>
              <Grid item>
                <TextField id='password' type='password' label='Password' />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(loginStyles, {withTheme: true})(Home);
