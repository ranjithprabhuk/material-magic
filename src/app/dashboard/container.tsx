import { connect } from 'react-redux';
import { IAppState } from '../../Model';
import Dashboard from './Dashboard';

const mapStateToProps = (state: IAppState) => {
  return {
    isSideBarOpen: state.sideBar.isSideBarOpen,
    isMenuBarOpen: state.menuBar.isMenuBarOpen,
  };
};

export default connect(mapStateToProps)(Dashboard);
