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
    updateSideBarViewContent: (content: string) => void;
}

export type IHeaderProps = IHeaderOwnProps & IHeaderStateProps;

export interface IHeaderState {

}
