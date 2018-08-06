import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { homeStyles } from './charts.styles';
import { IChartProps, IChartState } from './ICharts';

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  LineChart,
  Area,
  AreaChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { CollapsiblePanel } from '../components';
import { ThemeConfig } from '../../theme';

const data = [
  { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
  { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
  { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
  { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
  { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
  { name: 'Page F', uv: 1400, pv: 680, amt: 1700 },
];

const LineChartComponent = () => (
  <ResponsiveContainer width='100%' height={350}>
    <LineChart data={data} margin={{ top: 15, right: 30, left: 0, bottom: 15 }}>
      <XAxis dataKey='name' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip />
      <Legend />
      <Line type='natural' dataKey='pv' stroke={ThemeConfig.primaryColor[500]} activeDot={{ r: 8 }} />
      <Line type='monotone' dataKey='uv' stroke={ThemeConfig.secondaryColor[500]} />
      <Line type='monotone' dataKey='amt' stroke={ThemeConfig.dangerColor[500]} />
    </LineChart>
  </ResponsiveContainer>
);

const BarChartComponent = () => (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data} margin={{ top: 15, right: 30, left: 0, bottom: 15 }}>
        <XAxis dataKey='name' />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Legend />
        <Bar dataKey='pv' fill={ThemeConfig.primaryColor[500]} />
        <Bar dataKey='uv' fill={ThemeConfig.secondaryColor[500]} />
        <Bar dataKey='amt' fill={ThemeConfig.dangerColor[500]} />
      </BarChart>
    </ResponsiveContainer>
  );

const AreaChartComponent = () => (
    <ResponsiveContainer width='100%' height={350}>
      <AreaChart data={data} margin={{ top: 15, right: 30, left: 0, bottom: 15 }}>
        <XAxis dataKey='name' />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Legend />
        <Area dataKey='pv' fill={ThemeConfig.primaryColor[500]} />
        <Area dataKey='uv' fill={ThemeConfig.secondaryColor[500]} />
        <Area dataKey='amt' fill={ThemeConfig.dangerColor[500]} />
      </AreaChart>
    </ResponsiveContainer>
  );

const LineBarAreaComposedChart = () => (
  <ResponsiveContainer width='100%' height={350}>
    <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <CartesianGrid stroke='#f5f5f5' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type='monotone' dataKey='amt' fill={ThemeConfig.primaryColor[500]} stroke={ThemeConfig.primaryColor[500]} />
      <Bar dataKey='pv' barSize={20} fill={ThemeConfig.secondaryColor[500]} />
      <Line type='monotone' dataKey='uv' stroke={ThemeConfig.dangerColor[500]} />
    </ComposedChart>
  </ResponsiveContainer>
);

class Charts extends React.Component<IChartProps, IChartState> {
  public render(): React.ReactElement<Charts> {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <CollapsiblePanel autoOpen header='Line Chart' className={classes.panelHeader}>
              <LineChartComponent />
            </CollapsiblePanel>
          </Grid>
          <Grid item xs={12} md={6}>
            <CollapsiblePanel autoOpen header='Bar Chart' className={classes.panelHeader}>
              <BarChartComponent />
            </CollapsiblePanel>
          </Grid>
          <Grid item xs={12} md={6}>
            <CollapsiblePanel autoOpen header='Area Chart' className={classes.panelHeader}>
              <AreaChartComponent />
            </CollapsiblePanel>
          </Grid>
          <Grid item xs={12} md={6}>
            <CollapsiblePanel autoOpen header='Composed Chart' className={classes.panelHeader}>
              <LineBarAreaComposedChart />
            </CollapsiblePanel>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(homeStyles)(Charts);
