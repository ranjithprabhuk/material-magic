import { Theme } from '@material-ui/core';

interface ILoginOwnProps {
    classes: any;
}
interface ILoginStateProps {
    theme: Theme;
}

export type ILoginProps = ILoginOwnProps & ILoginStateProps;

export interface ILoginState {
}
