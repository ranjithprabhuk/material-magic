import { Theme } from '@material-ui/core';

interface ITextFieldsOwnProps {
    classes: any;
}
interface ITextFieldsStateProps {
    theme: Theme;
}

export type ITextFieldsProps = ITextFieldsOwnProps & ITextFieldsStateProps;

export interface ITextFieldsState {
    name: string;
    age: string;
    multiline: string;
    currency: string;
}
