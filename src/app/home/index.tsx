import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { homeStyles } from './home.styles';
import { IHomeProps, IHomeState } from './home.interface';
import StatsWidget from '../components/widget';
import StarIcon from '@material-ui/icons/Star';

class Home extends React.Component<IHomeProps, IHomeState> {
  public render(): React.ReactElement<Home> {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              component={<StarIcon style={{ fontSize: 50 }} />}
              value='32.5'
              title='Temperature'
              color='primary'
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(homeStyles)(Home);
