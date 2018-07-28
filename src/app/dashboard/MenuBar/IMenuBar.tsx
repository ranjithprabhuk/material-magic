import { Theme } from '@material-ui/core';

interface IMenuBarOwnProps {
    classes: any;
    isMenuBarOpen: boolean;
    toggleMenuBar: Function;
}
interface IMenuBarStateProps {
    theme?: Theme;
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
