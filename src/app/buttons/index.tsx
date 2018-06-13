import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { homeStyles } from './buttons.styles';
import { IHomeProps, IHomeState } from './buttons.interface';
import { Card, Button } from '@material-ui/core';

class Buttons extends React.Component<IHomeProps, IHomeState> {
    public render(): React.ReactElement<Buttons> {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item sm={12} md={6}>
                        <Card>
                            <Button color='primary'>Primary</Button>
                            <Button color='default'>Default</Button>
                            <Button color='secondary'>Secondary</Button>
                        </Card>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Card>
                            <div><Button variant='flat'>Flat Button</Button></div>
                            <div><Button variant='contained'>Contained Button</Button></div>
                            <div><Button variant='raised'>Raised Button</Button></div>
                            <div><Button variant='fab'>Fab Button</Button></div>
                        </Card>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default withStyles(homeStyles)(Buttons);
