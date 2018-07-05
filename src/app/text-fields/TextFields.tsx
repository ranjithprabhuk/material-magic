import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { textFieldStyles } from './textFields.styles';
import { ITextFieldsProps, ITextFieldsState } from './ITextFields';
import { CardContent, TextField, MenuItem } from '@material-ui/core';
import { CollapsiblePanel } from '../components';

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

class TextFields extends React.Component<ITextFieldsProps, ITextFieldsState> {
    constructor(props: ITextFieldsProps, context: any) {
        super(props, context);
        this.state = {
            name: 'Cat in the Hat',
            age: '',
            multiline: 'Controlled',
            currency: 'EUR',
          };
    }

    public render(): React.ReactElement<TextFields> {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <CollapsiblePanel header='Text Fields' autoOpen>
                            <CardContent style={{paddingBottom: 0}}>
                                <Grid container className={classes.gridContainer}>
                                    <form className={classes.container} noValidate autoComplete='off'>
                                        <TextField
                                        id='name'
                                        label='Name'
                                        className={classes.textField}
                                        value={this.state.name}
                                        margin='normal'
                                        />
                                        <TextField
                                        id='uncontrolled'
                                        label='Uncontrolled'
                                        defaultValue='foo'
                                        className={classes.textField}
                                        margin='normal'
                                        />
                                        <TextField
                                        required
                                        id='required'
                                        label='Required'
                                        defaultValue='Hello World'
                                        className={classes.textField}
                                        margin='normal'
                                        />
                                        <TextField
                                        error
                                        id='error'
                                        label='Error'
                                        defaultValue='Hello World'
                                        className={classes.textField}
                                        margin='normal'
                                        />
                                        <TextField
                                        id='password-input'
                                        label='Password'
                                        className={classes.textField}
                                        type='password'
                                        autoComplete='current-password'
                                        margin='normal'
                                        />
                                        <TextField
                                        id='read-only-input'
                                        label='Read Only'
                                        defaultValue='Hello World'
                                        className={classes.textField}
                                        margin='normal'
                                        InputProps={{
                                            disabled: true,
                                        }}
                                        />
                                        <TextField
                                        id='multiline-flexible'
                                        label='Multiline'
                                        multiline
                                        rowsMax='4'
                                        value={this.state.multiline}
                                        className={classes.textField}
                                        margin='normal'
                                        />
                                        <TextField
                                        id='multiline-static'
                                        label='Multiline'
                                        multiline
                                        rows='4'
                                        defaultValue='Default Value'
                                        className={classes.textField}
                                        margin='normal'
                                        />
                                        <TextField
                                        id='helperText'
                                        label='Helper text'
                                        defaultValue='Default Value'
                                        className={classes.textField}
                                        helperText='Some important text'
                                        margin='normal'
                                        />
                                        <TextField
                                        id='with-placeholder'
                                        label='With placeholder'
                                        placeholder='Placeholder'
                                        className={classes.textField}
                                        margin='normal'
                                        />
                                        <TextField
                                        id='textarea'
                                        label='With placeholder multiline'
                                        placeholder='Placeholder'
                                        multiline
                                        className={classes.textField}
                                        margin='normal'
                                        />
                                        <TextField
                                        id='number'
                                        label='Number'
                                        value={this.state.age}
                                        type='number'
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin='normal'
                                        />
                                        <TextField
                                        id='search'
                                        label='Search field'
                                        type='search'
                                        className={classes.textField}
                                        margin='normal'
                                        />
                                        <TextField
                                        id='select-currency'
                                        select
                                        label='Select'
                                        className={classes.textField}
                                        value={this.state.currency}
                                        SelectProps={{
                                            MenuProps: {
                                            className: classes.menu,
                                            },
                                        }}
                                        helperText='Please select your currency'
                                        margin='normal'
                                        >
                                        {currencies.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                        </TextField>
                                        <TextField
                                        id='select-currency-native'
                                        select
                                        label='Native select'
                                        className={classes.textField}
                                        value={this.state.currency}
                                        SelectProps={{
                                            native: true,
                                            MenuProps: {
                                            className: classes.menu,
                                            },
                                        }}
                                        helperText='Please select your currency'
                                        margin='normal'
                                        >
                                        {currencies.map(option => (
                                            <option key={option.value} value={option.value}>
                                            {option.label}
                                            </option>
                                        ))}
                                        </TextField>
                                        <TextField
                                        id='full-width'
                                        label='Label'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        placeholder='Placeholder'
                                        helperText='Full width!'
                                        fullWidth
                                        margin='normal'
                                        />
                                    </form>
                                </Grid>
                            </CardContent>
                        </CollapsiblePanel>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default withStyles(textFieldStyles)(TextFields);
