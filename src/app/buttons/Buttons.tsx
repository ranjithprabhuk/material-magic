import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { buttonStyles } from './buttons.styles';
import { IButtonProps, IButtonState } from './IButtons';
import { Button, CardContent } from '@material-ui/core';
import { CollapsiblePanel } from '../components';

class Buttons extends React.Component<IButtonProps, IButtonState> {
  public render(): React.ReactElement<Buttons> {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <CollapsiblePanel className={classes.panelHeader} header='Icon Color Variant' autoOpen>
              <CardContent style={{ paddingBottom: 0 }}>
                <Grid container className={classes.gridContainer}>
                  <Button className={classes.button}>Default</Button>
                  <Button color='primary' className={classes.button}>
                    Primary
                  </Button>
                  <Button color='secondary' className={classes.button}>
                    Secondary
                  </Button>
                  <Button disabled className={classes.button}>
                    Disabled
                  </Button>
                  <Button href='#text-buttons' className={classes.button}>
                    Link
                  </Button>
                  <input accept='image/*' className={classes.input} id='flat-button-file' multiple type='file' />
                  <label htmlFor='flat-button-file'>
                    <Button component='span' className={classes.button}>
                      Upload
                    </Button>
                  </label>
                </Grid>
              </CardContent>
            </CollapsiblePanel>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(buttonStyles)(Buttons);
