import { Theme } from '@material-ui/core';

interface IDashboardOwnProps {
    classes: any;
}
interface IDashboardStateProps {
    theme: Theme;
}

export type IDashboardProps = IDashboardOwnProps & IDashboardStateProps;

export interface IDashboardState {
    isMenuBarOpen: boolean;
    isSideBarOpen: boolean;
}
