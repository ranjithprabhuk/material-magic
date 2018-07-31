import { Theme } from '@material-ui/core';

interface ISideBarOwnProps {
    classes: any;
    viewContent: string;
}

interface ISideBarStateProps {
    theme?: Theme;
    isSideBarOpen: boolean;
    toggleSideBar: () => void;
}

export type ISideBarProps = ISideBarOwnProps & ISideBarStateProps;

export interface ISideBarState {

}

export interface ISideBarReduxState {
    isSideBarOpen: boolean;
    viewContent: string;
}
