import { Theme } from '@material-ui/core';

interface ISidebarOwnProps {
    classes: any;
    isSidebarOpen: boolean;
    handleDrawerClose: Function;
}
interface ISidebarStateProps {
    theme?: Theme;
}

export type ISidebarProps = ISidebarOwnProps & ISidebarStateProps;

export interface ISidebarState {
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
