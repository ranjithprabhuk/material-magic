import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, Grid, TextField, CardContent, Typography, Button } from '@material-ui/core';
import { loginStyles } from './login.styles';
import { ILoginProps, ILoginState } from './ILogin';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Star from '@material-ui/icons/Star';

class Home extends React.Component<ILoginProps, ILoginState> {
  public render(): React.ReactElement<Home> {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.login}>
          <Grid container spacing={8} justify='center' alignItems='flex-end'>
            <Grid item className={classes.headerIconGrid}>
              <AccountCircle style={{fontSize: 100}} />
            </Grid>
          </Grid>
          <CardContent>
            <Grid container spacing={8} justify='center' alignItems='flex-end'>
              <Grid item xs={1}>
                <AccountCircle />
              </Grid>
              <Grid item xs={8}>
                <TextField className={classes.inputFields} id='username' label='Username' />
              </Grid>
            </Grid>
            <Grid container spacing={8} justify='center' alignItems='flex-end'>
              <Grid item xs={1}>
                <Lock />
              </Grid>
              <Grid item xs={8}>
                <TextField className={classes.inputFields} id='password' type='password' label='Password' />
              </Grid>
            </Grid>
            <Grid className={classes.loginButtonContainer} container spacing={8} justify='space-around'>
              <Button variant='contained' color='primary'>
                Sign In
              </Button>
              <Button variant='contained' color='secondary'>
                Sign Up
              </Button>
            </Grid>
            <Grid container spacing={8} justify='center'>
              <Typography className={classes.socialLoginLabel}> Sign in with: </Typography>
            </Grid>
          </CardContent>
          <Card>
            <CardContent>
              <Grid container spacing={8} justify='space-around'>
                <Button variant='raised' color='primary' size='small'>
                  <Star />
                </Button>
                <Button variant='raised' color='secondary' size='small'>
                  <Star />
                </Button>
                <Button variant='raised' color='default' size='small'>
                  <Star />
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Card>
      </div>
    );
  }
}

export default withStyles(loginStyles, {withTheme: true})(Home);
