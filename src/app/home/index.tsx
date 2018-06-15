import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { homeStyles } from './home.styles';
import { IHomeProps, IHomeState } from './home.interface';
import StatsWidget from '../components/widget';
import StarIcon from '@material-ui/icons/Star';
import InboxIcon from '@material-ui/icons/Inbox';
import { defineColours, ThemeConfig } from '../../theme';

class Home extends React.Component<IHomeProps, IHomeState> {
  public render(): React.ReactElement<Home> {
    const { classes, theme } = this.props;
    const colorValue = defineColours(theme.palette.grey);
    console.log('valueee', colorValue);

    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              component={<StarIcon style={{ fontSize: 50 }} />}
              value='32.5 C'
              title='Temperature'
              textColor={defineColours(ThemeConfig.primaryColor, true)}
              backgroundColor={defineColours(ThemeConfig.primaryColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              component={<InboxIcon style={{ fontSize: 50 }} />}
              value='13486'
              title='Visibility'
              color='secondary'
              backgroundColor={defineColours(ThemeConfig.secondaryColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              component={<StarIcon style={{ fontSize: 50 }} />}
              value='87%'
              title='Humidity'
              textColor={defineColours(ThemeConfig.warningColor, true)}
              backgroundColor={defineColours(ThemeConfig.warningColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              component={<StarIcon style={{ fontSize: 50 }} />}
              value='2.1 m/s'
              title='Wind Speed'
              textColor={defineColours(ThemeConfig.dangerColor, true)}
              backgroundColor={defineColours(ThemeConfig.dangerColor)}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(homeStyles, {withTheme: true})(Home);
