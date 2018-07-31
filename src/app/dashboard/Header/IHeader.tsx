import { Theme } from '@material-ui/core';

interface IHeaderOwnProps {
    classes: any;
}

interface IHeaderStateProps {
    theme?: Theme;
    isMenuBarOpen: boolean;
    isSideBarOpen: boolean;
    sideBarCurrentViewContent: string;
    updateSideBarViewContent: (content: string) => void;
    toggleMenuBar: () => void;
    toggleSideBar: () => void;
}

export type IHeaderProps = IHeaderOwnProps & IHeaderStateProps;

export interface IHeaderState {

}
