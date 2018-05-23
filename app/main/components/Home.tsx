
import * as React from 'react';
import {RouteComponentProps} from 'react-router';

class Home extends React.Component<RouteComponentProps<object>, object> {
  public render(): React.ReactElement<object> {
    return (
        <div>
          <h1>Welcome to React+Redux+Typescript starter</h1>
        </div>
    );
  }
}

export default Home;
