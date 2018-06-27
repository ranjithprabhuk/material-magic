import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { iconStyles } from './icons.styles';
import { IIconsProps, IIconsState } from './IIcons';
import { Paper, Divider, Typography, CardContent } from '@material-ui/core';
import { Star } from '@material-ui/icons';
import { CollapsiblePanel } from '../components';

class Icons extends React.Component<IIconsProps, IIconsState> {
    public render(): React.ReactElement<Icons> {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <CollapsiblePanel header='Icon' autoOpen>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={6} sm={3} md={2}>
                                        <Paper elevation={0} style={{textAlign: 'center'}}>
                                            <Star style={{fontSize: 50}} />
                                            <Divider style={{margin: '5px 10px'}} />
                                            <Typography> Default Icon </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={2}>
                                        <Paper elevation={0} style={{textAlign: 'center'}}>
                                            <Star color='primary' style={{fontSize: 50}} />
                                            <Divider style={{margin: '5px 10px'}} />
                                            <Typography> Primary Icon </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={2}>
                                        <Paper elevation={0} style={{textAlign: 'center'}}>
                                            <Star color='secondary' style={{fontSize: 50}} />
                                            <Divider style={{margin: '5px 10px'}} />
                                            <Typography> Secondary Icon </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={2}>
                                        <Paper elevation={0} style={{textAlign: 'center'}}>
                                            <Star color='action' style={{fontSize: 50}} />
                                            <Divider style={{margin: '5px 10px'}} />
                                            <Typography> Action </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={2}>
                                        <Paper elevation={0} style={{textAlign: 'center'}}>
                                            <Star color='error' style={{fontSize: 50}} />
                                            <Divider style={{margin: '5px 10px'}} />
                                            <Typography> Error </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={2}>
                                        <Paper elevation={0} style={{textAlign: 'center'}}>
                                            <Star color='disabled' style={{fontSize: 50}} />
                                            <Divider style={{margin: '5px 10px'}} />
                                            <Typography> Disabled </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={2}>
                                        <Paper elevation={0} style={{textAlign: 'center', color: '#f00'}}>
                                            <Star color='inherit' style={{fontSize: 50}} />
                                            <Divider style={{margin: '5px 10px'}} />
                                            <Typography> Inherit </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={2}>
                                        <Paper elevation={0} style={{textAlign: 'center'}}>
                                            <Star color='disabled' style={{fontSize: 50}} />
                                            <Divider style={{margin: '5px 10px'}} />
                                            <Typography> Disabled </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={2}>
                                        <Paper elevation={0} style={{textAlign: 'center'}}>
                                            <Star color='error' style={{fontSize: 50}} />
                                            <Divider style={{margin: '5px 10px'}} />
                                            <Typography> Error </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={2}>
                                        <Paper elevation={0} style={{textAlign: 'center'}}>
                                            <Star color='disabled' style={{fontSize: 50}} />
                                            <Divider style={{margin: '5px 10px'}} />
                                            <Typography> Disabled </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={2}>
                                        <Paper elevation={0} style={{textAlign: 'center', color: '#f00'}}>
                                            <Star color='inherit' style={{fontSize: 50}} />
                                            <Divider style={{margin: '5px 10px'}} />
                                            <Typography> Inherit </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={2}>
                                        <Paper elevation={0} style={{textAlign: 'center'}}>
                                            <Star color='disabled' style={{fontSize: 50}} />
                                            <Divider style={{margin: '5px 10px'}} />
                                            <Typography> Disabled </Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CollapsiblePanel>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default withStyles(iconStyles)(Icons);
