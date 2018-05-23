
import * as React from 'react';
import { connect } from 'react-redux';
import MuiRaisedButton from 'material-ui/RaisedButton';

import Counter from './Counter';
import { addCounter } from '../Module';
import {IAppState} from '../../main';

interface ICounterListOwnProps {}
interface ICounterListStateProps {
  allIds: number[];
}

interface ICounterListDispatchProps {
  addCounter: typeof addCounter;
}

type CounterListProps = ICounterListOwnProps & ICounterListStateProps & ICounterListDispatchProps;


class CounterList extends React.Component<CounterListProps, object> {
  public render(): React.ReactElement<{}> {

    const containerStyle: React.CSSProperties = {
      marginTop: '30px',
      width: '100%',
      maxWidth: '300px',
      margin: '30px auto',
    };

    return (
      <div style={containerStyle}>
        <MuiRaisedButton style={{width:'100%'}} secondary={true} onMouseUp={this.props.addCounter}>Add</MuiRaisedButton>
        {this.props.allIds.map(id =>
              <div key={id} style={{marginTop: '2em'}}>
                <Counter id={id} />
              </div>)
        }
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState):ICounterListStateProps => {
  return {allIds: state.counterList.allIds };
};

const mapDispatchToProps = {
  addCounter: addCounter,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterList);
