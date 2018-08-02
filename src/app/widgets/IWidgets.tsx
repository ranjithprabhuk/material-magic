import { Theme } from '@material-ui/core';

interface IWidgetsOwnProps {
    classes: any;
}
interface IWidgetsStateProps {
    theme: Theme;
}

export type IWidgetsProps = IWidgetsOwnProps & IWidgetsStateProps;

export interface IWidgetsState {

}
