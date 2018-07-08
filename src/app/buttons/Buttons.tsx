import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { buttonStyles } from './buttons.styles';
import { IButtonProps, IButtonState } from './IButtons';
import { Button, CardContent } from '@material-ui/core';
import { CollapsiblePanel } from '../components';
import { ButtonProps } from '@material-ui/core/Button';

class Buttons extends React.Component<IButtonProps, IButtonState> {
  public renderButtons(headerText: string, buttonVariant: ButtonProps['variant']): any {
    const { classes } = this.props;
    return (
      <Grid item xs={12}>
        <CollapsiblePanel className={classes.panelHeader} header={headerText} autoOpen>
          <CardContent style={{ paddingBottom: 0 }}>
            <Grid container className={classes.gridContainer}>
              <Button variant={buttonVariant} className={classes.button}>Default</Button>
              <Button color='primary' className={classes.button}>
                Primary
              </Button>
              <Button variant={buttonVariant} color='secondary' className={classes.button}>
                Secondary
              </Button>
              <Button variant={buttonVariant} disabled className={classes.button}>
                Disabled
              </Button>
              <Button variant={buttonVariant} href='/#/dashboard' className={classes.button}>
                Link
              </Button>
              <input accept='image/*' className={classes.input} id='flat-button-file' multiple type='file' />
              <label htmlFor='flat-button-file'>
                <Button variant={buttonVariant} component='span' className={classes.button}>
                  Upload
                </Button>
              </label>
            </Grid>
          </CardContent>
        </CollapsiblePanel>
      </Grid>
    );
  }
  public render(): React.ReactElement<Buttons> {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          {this.renderButtons('Text Buttons', 'text')}
          {this.renderButtons('Outline Buttons', 'outlined')}
          {this.renderButtons('Contained Buttons', 'contained')}
          {this.renderButtons('Raised Buttons', 'raised')}
          {this.renderButtons('Raised Buttons', 'flat')}
          {this.renderButtons('Raised Buttons', 'fab')}
        </Grid>
      </div>
    );
  }
}

export default withStyles(buttonStyles)(Buttons);
