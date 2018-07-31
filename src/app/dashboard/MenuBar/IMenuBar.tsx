import { Theme } from '@material-ui/core';

interface IMenuBarOwnProps {
    classes: any;
}
interface IMenuBarStateProps {
    theme?: Theme;
    isMenuBarOpen: boolean;
    toggleMenuBar: () => void;
}

export type IMenuBarProps = IMenuBarOwnProps & IMenuBarStateProps;

export interface IMenuBarState {
    navigationMenuItems: IMenuItems[];
}

export interface IMenuItems {
    id: number;
    title: string;
    path: string;
    icon: any;
    isOpen?: boolean;
    children?: Array<IMenuItems>;
}

export interface IMenuBarReduxState {
    isMenuBarOpen: boolean;
}
