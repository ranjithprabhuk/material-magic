import * as React from 'react';
import MuiFloatingActionButton from 'material-ui/FloatingActionButton';
import MuiIncreaseIcon from 'material-ui/svg-icons/content/add';
import MuiDecreaseIcon from 'material-ui/svg-icons/content/remove';
import MuiGridList from 'material-ui/GridList/GridList';
import MuiGridTile from 'material-ui/GridList/GridTile';
import MuiTextField from 'material-ui/TextField';
import * as _ from 'lodash';

import {ICounter} from '../Model';
import {incrementCounter, decrementCounter, removeCounter, changeCounterName} from '../Module';
import {IAppState} from '../../main';
import {connect} from 'react-redux';

interface ICounterOwnProps {
  id: number;
}
type ICounterStateProps = ICounter;
interface ICounterDispatchProps {
  onIncrement: typeof incrementCounter;
  onDecrement: typeof decrementCounter;
  onRemove: typeof removeCounter;
  onChangeName: typeof changeCounterName;
}

type ICounterProps = ICounterOwnProps & ICounterStateProps & ICounterDispatchProps;
type ICounterReactState = {
  mouseHover: boolean;
  name: string;
};

class Counter extends React.Component<ICounterProps, ICounterReactState> {
  constructor(props:ICounterProps, context:any) {
    super(props, context);
    this.state = {
      mouseHover: false,
      name: this.props.name,
    };
  }

  public componentWillReceiveProps(props:ICounterProps):void {
    this.setState({ name: props.name });
  }

  public render(): React.ReactElement<{}> {
    const valueStyle: React.CSSProperties = {
      verticalAlign: 'middle',
      display: 'block',
      whiteSpace: 'normal',
      margin: 0,
    };

    const iconStyle: React.CSSProperties = {
      ...valueStyle,
      cursor: 'pointer',
    };


    const tileStyle: React.CSSProperties = {
      textAlign: 'center',
    };

    const {id, value}: ICounterStateProps = this.props;
    const onIncrement = this.props.onIncrement.bind(this, id);
    const onDecrement = this.props.onDecrement.bind(this, id);
    const onRemove = this.props.onRemove.bind(this, id);

    return (
      <MuiGridList cellHeight={90} cols={4}>
        <MuiGridTile style={tileStyle} cols={1} rows={1}>
          <MuiFloatingActionButton data-t-id='decrement' onClick={onDecrement}><MuiDecreaseIcon/></MuiFloatingActionButton>
        </MuiGridTile>
        <MuiGridTile style={tileStyle} cols={2} rows={1}>
          <div data-t-id='hover-area' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>

            <MuiTextField
              style={{width:'100px'}}
              hintText='Name'
              value={this.state.name}
              onChange={this.handleChange}
              onBlur={this.handleBlur.bind(this)}
            />

            <p style={valueStyle}>Value: <span data-t-id='value'>{value}</span></p>
            { this.state.mouseHover ?
              (<i data-t-id='remove' onClick={onRemove} style={iconStyle} className='material-icons'>delete forever</i>) :
              null
            }
          </div>
        </MuiGridTile>
        <MuiGridTile style={tileStyle} cols={1} rows={1}>
          <MuiFloatingActionButton data-t-id='increment'
                                   secondary={true}
                                   onClick={onIncrement}><MuiIncreaseIcon/></MuiFloatingActionButton>
        </MuiGridTile>
      </MuiGridList>
    );
  }

  //
  // Event handlers
  //

  private handleMouseEnter = () => {
    this.setState({ mouseHover: true });
  }

  private handleMouseLeave = () => {
    this.setState({ mouseHover: false });
  }

  private handleChange = (e:React.FormEvent<HTMLInputElement>) => {
    if( e.currentTarget.value && e.currentTarget.value.length < 13) {
      this.setState({name: e.currentTarget.value});
    }
  }

  private handleBlur = (e:React.FormEvent<HTMLInputElement>) => {
    if (this.state.name && this.props.name !== this.state.name) {
      this.props.onChangeName(this.props.id, this.state.name);
    }
  }

}

const mapStateToProps = (state: IAppState, props: ICounterOwnProps): ICounterStateProps => {
  return _.find<ICounter>(state.counterList.items, (item:ICounter) => item.id === props.id)!;
};

const mapDispatchToProps = {
  onIncrement: incrementCounter,
  onDecrement: decrementCounter,
  onRemove: removeCounter,
  onChangeName: changeCounterName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
