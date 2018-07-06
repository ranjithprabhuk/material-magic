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
    console.log('conponentnt', this);
    if(!this.state.Component) {
      this.props.moduleProvider().then((data:any) => {
        console.log('what data', data, data.Component);
      });
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
