import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Card, Divider, Grid, IconButton, Typography } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import { settingsStyles } from './settings.styles';
import { ISettingsProps, ISettingsState } from './ISettings';
import { Colors } from '../../theme';

class Settings extends React.Component<ISettingsProps, ISettingsState> {
  public renderPrimaryColor(): any {
    const { currentTheme, classes } = this.props;

    return (
      <Card square className={classes.card}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='body1'>Primary Color</Typography>
          </Grid>
          <Divider />
          <Grid item xs={12} className={classes.iconGrid}>
            {(Colors || []).map((color) => (
              <IconButton
                className={classNames(currentTheme.primaryColor[500] === color[500] && classes.activeTheme)}
                onClick={() => this.props.updatePrimaryColor(color)}
              >
                <Favorite style={{ color: color[500] }} />
              </IconButton>
            ))}
          </Grid>
        </Grid>
      </Card>
    );
  }

  public render(): React.ReactElement<Settings> {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.renderPrimaryColor()}
      </div>
    );
  }
}

export default withStyles(settingsStyles, { withTheme: true })(Settings);
