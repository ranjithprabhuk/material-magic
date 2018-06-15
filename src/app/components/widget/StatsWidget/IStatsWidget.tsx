import { PropTypes, Theme } from '@material-ui/core';

interface IStatsWidgetOwnProps {
  classes: any;
  component?: any;
  color?: PropTypes.Color | 'textSecondary' | 'error';
  title?: string;
  value?: string;
  square?: boolean;
  textColor?: string;
  backgroundColor?: string;
}

interface IStatsWidgetStateProps {
  theme?: Theme;
}

export type IStatsWidgetProps = IStatsWidgetOwnProps & IStatsWidgetStateProps;
