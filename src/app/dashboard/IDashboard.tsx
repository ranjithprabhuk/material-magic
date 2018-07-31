import { Theme } from '@material-ui/core';

interface IDashboardOwnProps {
    classes: any;
}
interface IDashboardStateProps {
    theme: Theme;
    isSideBarOpen: boolean;
    isMenuBarOpen: boolean;
}

export type IDashboardProps = IDashboardOwnProps & IDashboardStateProps;

export interface IDashboardState {

}
