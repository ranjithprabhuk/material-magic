import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import { statsWidgetStyles } from './statsWidget.styles';
import { IStatsWidgetProps } from './IStatsWidget';

const StatsWidget: React.SFC<IStatsWidgetProps> = ({
  classes,
  component,
  color,
  title,
  value,
  square,
  textColor,
  backgroundColor,
  theme,
  direction,
}) => {
  const isRightAligned = direction === 'rtl' || (theme && theme.direction === 'rtl');

  return (
    <div>
      <Paper square={square}>
        <Grid container>
          <Grid item xs={7} style={{ order: isRightAligned ? 1 : 0 }}>
            <div className={classes.statContent}>
              <Typography
                variant='display1'
                noWrap
                color={color}
                style={{ color: textColor }}
                align={isRightAligned ? 'right' : 'left'}
                className={classes.statValue}
              >
                {value}
              </Typography>
              <Typography variant='subheading' align={isRightAligned ? 'right' : 'left'} className={classes.statTitle}>
                {title}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={5} style={{ order: isRightAligned ? 0 : 1 }}>
            <Paper className={classes.icon} style={{ background: backgroundColor }} square={square}>
              {component}
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default withStyles(statsWidgetStyles, { withTheme: true })(StatsWidget);
