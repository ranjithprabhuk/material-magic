import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, CardContent, Typography } from '@material-ui/core';
import { homeStyles } from './home.styles';
import { IHomeProps, IHomeState } from './IHome';
import { StatsWidget, CollapsiblePanel } from '../components';
import StarIcon from '@material-ui/icons/Star';
import InboxIcon from '@material-ui/icons/Inbox';
import { defineColours, ThemeConfig } from '../../theme';

class Home extends React.Component<IHomeProps, IHomeState> {
  public render(): React.ReactElement<Home> {
    const { classes } = this.props;

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
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={6}>
            <CollapsiblePanel header='Some Title'>
              <CardContent>
                <Typography paragraph variant='body2'>
                  Method:
                </Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                  chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                  salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                  minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                  cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                  Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                  the rice, and cook again without stirring, until mussels have opened and rice is
                  just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </CollapsiblePanel>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(homeStyles, {withTheme: true})(Home);
