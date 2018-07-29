import { Theme } from '@material-ui/core';

interface IUserProfileOwnProps {
    classes: any;
}
interface IUserProfileStateProps {
    theme?: Theme;
}

export type IUserProfileProps = IUserProfileOwnProps & IUserProfileStateProps;

export interface IUserProfileState {

}
