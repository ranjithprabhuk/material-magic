import { Theme } from '@material-ui/core';

interface ISidebarOwnProps {
    classes: any;
    isOpen: boolean;
    handleDrawerClose: Function;
}
interface ISidebarStateProps {
    theme?: Theme;
}

export type ISidebarProps = ISidebarOwnProps & ISidebarStateProps;
