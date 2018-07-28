import { Theme } from '@material-ui/core';

interface IHeaderOwnProps {
    classes: any;
    isMenuBarOpen: boolean;
    toggleMenuBar: Function;
    toggleSideBar: Function;
}
interface IHeaderStateProps {
    theme?: Theme;
}

export type IHeaderProps = IHeaderOwnProps & IHeaderStateProps;

export interface IHeaderState {

}
