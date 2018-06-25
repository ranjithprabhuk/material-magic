import { Theme } from '@material-ui/core';

interface IChartOwnProps {
    classes: any;
}
interface IChartStateProps {
    theme: Theme;
}

export type IChartProps = IChartOwnProps & IChartStateProps;

export interface IChartState {
    open: boolean;
}
