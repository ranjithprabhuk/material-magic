import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { homeStyles } from './charts.styles';
import { IHomeProps, IHomeState } from './charts.interface';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, Button, Paper } from '@material-ui/core';
const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

class Charts extends React.Component<IHomeProps, IHomeState> {
    public render(): React.ReactElement<Charts> {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item sm={12} md={6}>
                        <Paper>
                            <ResponsiveContainer width='100%' height={300}>
                                <AreaChart data={data}
                                    margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                                    <CartesianGrid strokeDasharray='3 3' />
                                    <XAxis dataKey='name' />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
                                </AreaChart>
                            </ResponsiveContainer>
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Card>
                            <Button color='primary'>Primary</Button>
                            <Button color='default'>Default</Button>
                            <Button color='secondary'>Secondary</Button>
                        </Card>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default withStyles(homeStyles)(Charts);
