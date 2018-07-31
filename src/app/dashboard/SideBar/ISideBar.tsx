import { Theme } from '@material-ui/core';

interface ISideBarOwnProps {
    classes: any;
}

interface ISideBarStateProps {
    theme?: Theme;
    isSideBarOpen: boolean;
    viewContent: string;
    toggleSideBar: () => void;
}

export type ISideBarProps = ISideBarOwnProps & ISideBarStateProps;

export interface ISideBarState {

}

export interface ISideBarReduxState {
    isSideBarOpen: boolean;
    viewContent: string;
}
