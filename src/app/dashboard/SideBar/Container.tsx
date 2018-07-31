import { connect } from 'react-redux';
import { IAppState } from '../../../Model';
import Sidebar from './Sidebar';
import { toggleSideBar } from './actions';

const mapStateToProps = (state: IAppState) => {
  return {
    viewContent: state.sideBar.viewContent,
    isSideBarOpen: state.sideBar.isSideBarOpen,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    toggleSideBar: () => dispatch(toggleSideBar()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
