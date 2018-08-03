import { PropTypes, Theme } from '@material-ui/core';
import { Style } from '@material-ui/core/styles/createTypography';

interface IStatsWidgetOwnProps {
  classes: any;
  component?: any;
  color?: PropTypes.Color | 'textSecondary' | 'error';
  title?: string;
  value?: string;
  square?: boolean;
  textColor?: string;
  backgroundColor?: string;
  direction?: 'rtl' | 'ltr';
  padding?: number | string;
  valueVariant?: Style | 'caption' | 'button';
  titleVariant?: Style | 'caption' | 'button';
  onTitleClick?: () => void;
  onWidgetClick?: () => void;
  onValueClick?: () => void;
}

interface IStatsWidgetStateProps {
  theme?: Theme;
}

export type IStatsWidgetProps = IStatsWidgetOwnProps & IStatsWidgetStateProps;
