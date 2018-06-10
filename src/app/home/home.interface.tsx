import { Theme } from '@material-ui/core';

interface IHomeOwnProps {
    classes: any;
}
interface IHomeStateProps {
    theme: Theme;
}

export type IHomeProps = IHomeOwnProps & IHomeStateProps;

export interface IHomeState {
    open: boolean;
}
