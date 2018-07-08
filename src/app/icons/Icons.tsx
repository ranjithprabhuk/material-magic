import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { iconPageStyles } from './icons.styles';
import { IIconsProps, IIconsState } from './IIcons';
import { Paper, Divider, Typography, CardContent } from '@material-ui/core';
import { CollapsiblePanel } from '../components';
import { colorVariantIcons } from './iconSet/colorVariantIcons';

class Icons extends React.Component<IIconsProps, IIconsState> {
    public render(): React.ReactElement<Icons> {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <CollapsiblePanel header='Icon Color Variant' autoOpen>
                            <CardContent style={{paddingBottom: 0}}>
                                <Grid container className={classes.gridContainer}>
                                    {colorVariantIcons && colorVariantIcons.map((colorVariantIcon, index) => (
                                        <Grid className={classes.iconGrid} item xs={6} sm={3} md={2} key={`color_variant_icon_${index}`}>
                                            <Paper elevation={0} style={{color: 'red'}}>
                                                {colorVariantIcon.icon}
                                                <Divider style={{margin: '5px 10px'}} />
                                                <Typography> {colorVariantIcon.title} </Typography>
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

export default withStyles(iconPageStyles)(Icons);
