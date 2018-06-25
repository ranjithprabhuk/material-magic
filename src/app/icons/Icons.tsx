import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { iconStyles } from './icons.styles';
import { IIconsProps, IIconsState } from './IIcons';
import { Paper } from '@material-ui/core';

class Icons extends React.Component<IIconsProps, IIconsState> {
    public render(): React.ReactElement<Icons> {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={2} sm={12} md={6}>
                        <Paper>
                            Icons
                        </Paper>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default withStyles(iconStyles)(Icons);
