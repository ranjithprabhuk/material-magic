import * as React from 'react';
import { ThreeSixty } from '@material-ui/icons';

export interface IAsyncComponentProps {
  moduleProvider: any;
}

export interface IAsyncComponentState {
  Component: any;
}

export default class  extends React.PureComponent<IAsyncComponentProps, IAsyncComponentState> {
  constructor(props: IAsyncComponentProps) {
    super(props);
    this.state = {
      Component: null,
    };
  }

  public componentWillMount(): any {
    if(!this.state.Component) {
      this.props.moduleProvider().then((data:any) => this.setState({Component: data.default}));
    }
  }

  public render(): any {
    const { Component } = this.state;

    return (
      <div>
        {Component ? <Component /> : <ThreeSixty style={{ fontSize: 50}} />}
      </div>
    );
  }
}
