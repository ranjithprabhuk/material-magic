import { Theme } from '@material-ui/core';

interface IIconsOwnProps {
    classes: any;
}
interface IIconsStateProps {
    theme: Theme;
}

export type IIconsProps = IIconsOwnProps & IIconsStateProps;

export interface IIconsState {
    open: boolean;
}
