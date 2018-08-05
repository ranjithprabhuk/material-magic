import { Color, Theme } from '@material-ui/core';
import { IThemeConfig } from '../../theme/IThemeConfig';

interface ISettingsOwnProps {
    classes: any;
}
interface ISettingsStateProps {
    theme?: Theme;
    currentTheme: IThemeConfig;
    updatePrimaryColor: (color: Color) => void;
    updateSecondaryColor: (color: Color) => void;
}

export type ISettingsProps = ISettingsOwnProps & ISettingsStateProps;

export interface ISettingsState {

}
