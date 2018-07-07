import * as React from 'react';
import { Theme, withStyles, CircularProgress } from '@material-ui/core';

interface IAsyncComponentOwnProps {
  moduleProvider: any;
  classes: any;
}

interface IAsyncComponentState {
  Component: any;
}

interface IAsyncComponentStateProps {
  theme?: Theme;
}

type IAsyncComponentProps = IAsyncComponentOwnProps & IAsyncComponentStateProps;

export const styles = (theme: Theme): any => ({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class AsyncComponent extends React.PureComponent<IAsyncComponentProps, IAsyncComponentState> {
  constructor(props: IAsyncComponentProps) {
    super(props);
    this.state = {
      Component: null,
    };
  }

  public componentWillMount(): any {
    if (!this.state.Component) {
        this.props.moduleProvider().then((data: any) => this.setState({ Component: data.default }));
    }
  }

  public renderLoader(): any {
    const {classes} = this.props;
    return (
      <div className={classes.loader}>
        <CircularProgress className={classes.progress} />
      </div>
    );
  }

  public render(): any {
    const { Component } = this.state;
    return Component ? <Component /> : this.renderLoader();
  }
}

export default withStyles(styles)(AsyncComponent);
