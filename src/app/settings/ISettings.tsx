import { Color, Theme } from '@material-ui/core';
import { IThemeConfig } from '../../theme/IThemeConfig';

interface ISettingsOwnProps {
    classes: any;
}
interface ISettingsStateProps {
    theme?: Theme;
    currentThemeSettings: IThemeConfig;
    updatePrimaryColor: (color: Color) => void;
}

export type ISettingsProps = ISettingsOwnProps & ISettingsStateProps;

export interface ISettingsState {

}
