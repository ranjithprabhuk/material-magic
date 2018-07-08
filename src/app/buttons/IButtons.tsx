import { Theme } from '@material-ui/core';

interface IButtonOwnProps {
    classes: any;
}
interface IButtonStateProps {
    theme: Theme;
}

export type IButtonProps = IButtonOwnProps & IButtonStateProps;

export interface IButtonState {
}
