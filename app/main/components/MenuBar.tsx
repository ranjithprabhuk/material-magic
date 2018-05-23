import * as React from 'react';
import MuiAppBar from 'material-ui/AppBar';
import MuiDrawer from 'material-ui/Drawer';
import MuiMenuItem from 'material-ui/MenuItem';

import {connect, Dispatch} from 'react-redux';
import {push, RouterAction} from 'react-router-redux';
import {LocationDescriptor, LocationState, Location} from 'history';
import {IAppState} from '../Model';
import {CounterListPage, HomePage} from './RoutePaths';

interface IMenuBarOwnProps {
  title: string;
}
interface IMenuBarStateProps {
  location: Location | null;
}
interface IMenuBarDispatchProps {
  navigateTo: (location: LocationDescriptor, state?: LocationState) => RouterAction;
}
type IMenuBarProps = IMenuBarOwnProps & IMenuBarStateProps & IMenuBarDispatchProps;

interface IMenuBarReactState {
  open: boolean;
}

class MenuBar extends React.Component<IMenuBarProps, IMenuBarReactState> {

  constructor(props:IMenuBarProps, context:any) {
    super(props, context);
    this.state = {open: false};
  }

  public render():JSX.Element {

    const MenuItem = (props:{name:string, path:string}):React.ReactElement<MuiMenuItem> => (
      <MuiMenuItem disabled={this.props.location!.pathname === props.path}
        onClick={this.handleNavigate(props.path)}>{props.name}</MuiMenuItem>
    );

    return (
      <div>
        <MuiAppBar onLeftIconButtonClick={this.handleToggle} title={this.props.title} />
        <MuiDrawer docked={false} width={250} open={this.state.open}
                   onRequestChange={(open) => this.setState({open})}>
          <MenuItem name='Home' path={HomePage}/>
          <MenuItem name='Counter List' path={CounterListPage} />
          <MenuItem name='Link to nonexistent' path='foobar' />
        </MuiDrawer>
      </div>
    );
  }

  private handleToggle = () => this.setState({open: !this.state.open});

  private handleNavigate = (path:string) => {
    return () => {
      this.props.navigateTo(path);
      this.setState({open: false});
    };
  }
}

const mapStateToProps = (state: IAppState):IMenuBarStateProps => {
  return {
    location: state.routing.location,
  };
};

const mapDispatchToProps = (dispatch:Dispatch<any>):IMenuBarDispatchProps => ({
  navigateTo: (location:LocationDescriptor, state?: LocationState) => {
    return dispatch(push(location));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
