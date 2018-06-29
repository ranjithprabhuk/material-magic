import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { iconStyles } from './icons.styles';
import { IIconsProps, IIconsState } from './IIcons';
import { Paper, Divider, Typography, CardContent } from '@material-ui/core';
import { Star } from '@material-ui/icons';
import { CollapsiblePanel } from '../components';

const iconColorProps = [
    {
        title: 'Default',
        icon: <Star style={{fontSize: 50}} />,
    },
    {
        title: 'Primary',
        icon: <Star style={{fontSize: 50}} />,
    },
    {
        title: 'Secondary',
        icon: <Star style={{fontSize: 50}} />,
    },
    {
        title: 'Action',
        icon: <Star style={{fontSize: 50}} />,
    },
    {
        title: 'Error',
        icon: <Star style={{fontSize: 50}} />,
    },
    {
        title: 'Disabled',
        icon: <Star style={{fontSize: 50}} />,
    },
    {
        title: 'Inherit',
        icon: <Star style={{fontSize: 50}} />,
    },
    {
        title: 'Default',
        icon: <Star style={{fontSize: 50}} />,
    },
    {
        title: 'Default',
        icon: <Star style={{fontSize: 50}} />,
    },
    {
        title: 'Default',
        icon: <Star style={{fontSize: 50}} />,
    },
    {
        title: 'Default',
        icon: <Star style={{fontSize: 50}} />,
    },
    {
        title: 'Default',
        icon: <Star style={{fontSize: 50}} />,
    },
];

class Icons extends React.Component<IIconsProps, IIconsState> {
    public render(): React.ReactElement<Icons> {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <CollapsiblePanel header='Icon' autoOpen>
                            <CardContent style={{paddingBottom: 0}}>
                                <Grid container>
                                    {iconColorProps && iconColorProps.map(iconProp => (
                                        <Grid className={classes.iconGrid} item xs={6} sm={3} md={2}>
                                            <Paper elevation={0}>
                                                {iconProp.icon}
                                                <Divider style={{margin: '5px 10px'}} />
                                                <Typography> {iconProp.title} </Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
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
