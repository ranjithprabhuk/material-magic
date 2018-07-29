import { Theme } from '@material-ui/core';

interface IHeaderOwnProps {
    classes: any;
    isMenuBarOpen: boolean;
    isSideBarOpen: boolean;
    toggleMenuBar: () => void;
    toggleSideBar: () => void;
}

interface IHeaderStateProps {
    theme?: Theme;
    currentSideBarContentView: string;
    updateSideBarViewContent: (content: string) => any;
}

export type IHeaderProps = IHeaderOwnProps & IHeaderStateProps;

export interface IHeaderState {

}
