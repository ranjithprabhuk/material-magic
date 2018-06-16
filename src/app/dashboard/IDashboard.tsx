import { Theme } from '@material-ui/core';
import * as History from 'history';

interface IDashboardOwnProps {
    classes: any;
}
interface IDashboardStateProps {
    theme: Theme;
    location: History.Location;
}

export type IDashboardProps = IDashboardOwnProps & IDashboardStateProps;

export interface IDashboardState {
    open: boolean;
}
