import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Color, Grid, IconButton } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import { settingsStyles } from './settings.styles';
import { ISettingsProps, ISettingsState } from './ISettings';
import { Colors } from '../../theme';
import { CollapsiblePanel } from '../components';

class Settings extends React.Component<ISettingsProps, ISettingsState> {
  public renderColorSwitcher(key: string, title: string): any {
    const { currentTheme, classes } = this.props;

    return (
      <div className={classes.panel}>
        <CollapsiblePanel noCollapse header={title}>
            <Grid container spacing={0}>
              <Grid item xs={12} className={classes.iconGrid} spacing={0}>
                {(Colors || []).map((color) => (
                  <IconButton
                    className={classNames(this.getColorSettings(currentTheme, key) === color.value[500] && classes.activeTheme)}
                    onClick={() => this.updateColorSettings(key, color.value)}
                    title={color.name}
                  >
                    <Favorite style={{ color: color.value[500] }} />
                  </IconButton>
                ))}
              </Grid>
            </Grid>
        </CollapsiblePanel>
      </div>
    );
  }

  public getColorSettings(currentTheme: any, key: string): string {
    return currentTheme[key][500];
  }

  public updateColorSettings(key: string, color: Color): void {
    switch(key) {
      case 'primaryColor':
        this.props.updatePrimaryColor(color);
        break;
      case 'secondaryColor':
        this.props.updateSecondaryColor(color);
        break;
      default: break;
    }
  }

  public render(): React.ReactElement<Settings> {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.renderColorSwitcher('primaryColor', 'Primary Color')}
        {this.renderColorSwitcher('secondaryColor', 'Secondary Color')}
      </div>
    );
  }
}

export default withStyles(settingsStyles, { withTheme: true })(Settings);
