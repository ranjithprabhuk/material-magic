import { Theme } from '@material-ui/core';

interface IHeaderOwnProps {
    classes: any;
    isSidebarOpen: boolean;
    handleDrawerOpen: Function;
    toggleSettings: Function;
}
interface IHeaderStateProps {
    theme?: Theme;
}

export type IHeaderProps = IHeaderOwnProps & IHeaderStateProps;
