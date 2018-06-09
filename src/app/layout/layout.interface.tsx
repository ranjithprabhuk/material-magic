import { Theme } from '@material-ui/core';

interface ILayoutOwnProps {
    classes: any;
}
interface ILayoutStateProps {
    theme: Theme;
}

export type ILayoutProps = ILayoutOwnProps & ILayoutStateProps;

export interface ILayoutState {
    open: boolean;
}
