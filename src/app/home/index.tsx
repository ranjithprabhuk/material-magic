import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography} from '@material-ui/core';
import { homeStyles } from './home.styles';
import { IHomeProps, IHomeState } from './home.interface';
import MediaControlCard from '../components/widget';
import StarIcon from '@material-ui/icons/Star';

class Home extends React.Component<IHomeProps, IHomeState> {
    public render(): React.ReactElement<Home> {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={6} md={3}>
                        <MediaControlCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <MediaControlCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <MediaControlCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <MediaControlCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper>
                            <Grid container>
                                <Grid item xs={7}>
                                    <div style={{padding: 8}}>
                                        <Typography variant='display3' noWrap color='primary'>
                                            38.5
                                        </Typography>
                                        <Typography variant='headline'>
                                            Temperature
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={5}>
                                    <Paper style={{background: '#326822', width: '100%', height: '100%',
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 50}}>
                                        <StarIcon />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(homeStyles)(Home);
