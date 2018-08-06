import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Divider, Grid, Typography } from '@material-ui/core';
import { widgetStyles } from './widgets.styles';
import { IWidgetsProps, IWidgetsState } from './IWidgets';
import { StatsWidget } from '../components';
import StarIcon from '@material-ui/icons/Star';
import InboxIcon from '@material-ui/icons/Inbox';
import { defineColours, ThemeConfig } from '../../theme';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, value: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, value: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, value: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, value: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, value: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, value: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, value: 2100 },
];

const LineChartComponent = () => (
  <LineChart width={80} height={60} data={data}>
    <Line type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={2} />
  </LineChart>
);

const BarChartComponent = () => (
  <BarChart width={80} height={60} data={data}>
    <Bar dataKey='uv' fill='#fff'/>
  </BarChart>
);

const AreaChartComponent = () => (
  <AreaChart width={80} height={60} data={data}>
    <Area type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={2} />
  </AreaChart>
);

const PieChartComponent = () => (
  <PieChart width={70} height={70}>
    <Pie
      startAngle={0}
      endAngle={360}
      data={data}
      dataKey='pv'
      cx={35}
      cy={35}
      outerRadius={30}
      fill='#fff'
      stroke='333'
      paddingAngle={5}
    />
  </PieChart>
);


class Widgets extends React.Component<IWidgetsProps, IWidgetsState> {
  public render(): React.ReactElement<Widgets> {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={8} className={classes.gridContainer}>
        <Grid item xs={12}>
          <Typography variant='body2'>Widgets With Icons</Typography>
          <Divider />
        </Grid>
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
        <Grid container spacing={8} className={classes.gridContainer}>
        <Grid item xs={12}>
          <Typography variant='body2'>Widgets With Inline Charts</Typography>
          <Divider />
        </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              component={<LineChartComponent />}
              value='32.5 C'
              title='Temperature'
              textColor={defineColours(ThemeConfig.primaryColor, true)}
              backgroundColor={defineColours(ThemeConfig.primaryColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              component={<BarChartComponent />}
              value='13486'
              title='Visibility'
              color='secondary'
              backgroundColor={defineColours(ThemeConfig.secondaryColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              component={<AreaChartComponent />}
              value='87%'
              title='Humidity'
              textColor={defineColours(ThemeConfig.warningColor, true)}
              backgroundColor={defineColours(ThemeConfig.warningColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              component={<PieChartComponent />}
              value='2.1 m/s'
              title='Wind Speed'
              textColor={defineColours(ThemeConfig.dangerColor, true)}
              backgroundColor={defineColours(ThemeConfig.dangerColor)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={8} className={classes.gridContainer}>
          <Grid item xs={12}>
            <Typography variant='body2'>Widgets With Padding</Typography>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              padding={10}
              component={<StarIcon style={{ fontSize: 50 }} />}
              value='32.5 C'
              title='Temperature'
              textColor={defineColours(ThemeConfig.primaryColor, true)}
              backgroundColor={defineColours(ThemeConfig.primaryColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              padding={10}
              component={<InboxIcon style={{ fontSize: 50 }} />}
              value='13486'
              title='Visibility'
              color='secondary'
              backgroundColor={defineColours(ThemeConfig.secondaryColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              padding={10}
              component={<StarIcon style={{ fontSize: 50 }} />}
              value='87%'
              title='Humidity'
              textColor={defineColours(ThemeConfig.warningColor, true)}
              backgroundColor={defineColours(ThemeConfig.warningColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              padding={10}
              component={<StarIcon style={{ fontSize: 50 }} />}
              value='2.1 m/s'
              title='Wind Speed'
              textColor={defineColours(ThemeConfig.dangerColor, true)}
              backgroundColor={defineColours(ThemeConfig.dangerColor)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={8} className={classes.gridContainer}>
          <Grid item xs={12}>
            <Typography variant='body2'>Square Widgets With Inline Charts</Typography>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              square
              component={<LineChartComponent />}
              value='32.5 C'
              title='Temperature'
              textColor={defineColours(ThemeConfig.primaryColor, true)}
              backgroundColor={defineColours(ThemeConfig.primaryColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              square
              component={<BarChartComponent />}
              value='13486'
              title='Visibility'
              color='secondary'
              backgroundColor={defineColours(ThemeConfig.secondaryColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              square
              component={<AreaChartComponent />}
              value='87%'
              title='Humidity'
              textColor={defineColours(ThemeConfig.warningColor, true)}
              backgroundColor={defineColours(ThemeConfig.warningColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              square
              component={<PieChartComponent />}
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

export default withStyles(widgetStyles, { withTheme: true })(Widgets);
