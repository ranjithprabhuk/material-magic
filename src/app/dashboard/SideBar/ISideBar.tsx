import { Theme } from '@material-ui/core';

interface ISideBarOwnProps {
    classes: any;
    isSideBarOpen: boolean;
    toggleSideBar: Function;
    viewContent: string;
}

interface ISideBarStateProps {
    theme?: Theme;
}

export type ISideBarProps = ISideBarOwnProps & ISideBarStateProps;

export interface ISideBarState {

}

export interface ISideBarReduxState {
    viewContent: string;
}
