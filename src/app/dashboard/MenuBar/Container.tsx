import { connect } from 'react-redux';
import { IAppState } from '../../../Model';
import MenuBar from './MenuBar';
import { toggleMenuBar } from './actions';

const mapStateToProps = (state: IAppState) => {
  return {
    isMenuBarOpen: state.menuBar.isMenuBarOpen,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    toggleMenuBar: () => dispatch(toggleMenuBar()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuBar);
