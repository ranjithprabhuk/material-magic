import { Theme } from '@material-ui/core';
import * as History from 'history';

interface ISidebarOwnProps {
    classes: any;
    isOpen: boolean;
    handleDrawerClose: Function;
    location?: History.Location;
}
interface ISidebarStateProps {
    theme?: Theme;
}

export type ISidebarProps = ISidebarOwnProps & ISidebarStateProps;

export interface IMenuItems {
    id: number;
    title: string;
    path: string;
    icon: any;
}
