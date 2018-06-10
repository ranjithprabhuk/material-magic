import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { homeStyles } from './home.styles';
import { IHomeProps, IHomeState } from './home.interface';
import MediaControlCard from '../components/widget';

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
                </Grid>
            </div>
        );
    }
}

export default withStyles(homeStyles)(Home);
