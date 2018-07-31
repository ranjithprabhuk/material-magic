import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Card, CardMedia, Grid, Typography } from '@material-ui/core';
import { userProfileStyles } from './userProfile.styles';
import { IUserProfileProps, IUserProfileState } from './IUserProfile';

class UserProfile extends React.Component<IUserProfileProps, IUserProfileState> {
  public render(): React.ReactElement<UserProfile> {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card square className={classes.card}>
          <Grid container>
            <Grid item xs={4}>
              <CardMedia
                className={classes.userImage}
                image='/src/assets/images/ranjithprabhu.jpg'
                title='Ranjithprabhu'
              />
            </Grid>
            <Grid item xs={8} className={classes.userInfo}>
              <div>
                <Typography noWrap variant='title'>Ranjithprabhu</Typography>
                <Typography noWrap variant='body1' color='textSecondary'>
                  Software Engineer
                </Typography>
              </div>
              <Link to='/login'>
                <div>Logout</div>
              </Link>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default withStyles(userProfileStyles, {withTheme: true})(UserProfile);
