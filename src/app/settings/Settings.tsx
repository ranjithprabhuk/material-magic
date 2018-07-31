import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, Divider, Grid, IconButton, Typography } from '@material-ui/core';
import { blue, pink, orange, red } from '@material-ui/core/colors';
import Favorite from '@material-ui/icons/Favorite';
import { settingsStyles } from './settings.styles';
import { ISettingsProps, ISettingsState } from './ISettings';

class Settings extends React.Component<ISettingsProps, ISettingsState> {
  public render(): React.ReactElement<Settings> {
    const { classes, updatePrimaryColor } = this.props;

    return (
      <div className={classes.root}>
        <Card square className={classes.card}>
          <Grid container>
            <Grid item>
              <Typography variant='body1'>Theme</Typography>
            </Grid>
            <Divider />
            <Grid item>
              <IconButton onClick={() => updatePrimaryColor(orange)}>
                <Favorite />
              </IconButton>
              <IconButton onClick={() => updatePrimaryColor(blue)}>
                <Favorite />
              </IconButton>
              <IconButton onClick={() => updatePrimaryColor(pink)}>
                <Favorite />
              </IconButton>
              <IconButton onClick={() => updatePrimaryColor(red)}>
                <Favorite />
              </IconButton>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default withStyles(settingsStyles, {withTheme: true})(Settings);
