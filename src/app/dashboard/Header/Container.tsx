import { connect } from 'react-redux';
import { IAppState } from '../../../Model';
import Header from './Header';
import { updateViewContent, toggleSideBar } from '../SideBar';
import { toggleMenuBar } from '../MenuBar';

const mapStateToProps = (state: IAppState) => {
  return {
    sideBarCurrentViewContent: state.sideBar.viewContent,
    isSideBarOpen: state.sideBar.isSideBarOpen,
    isMenuBarOpen: state.menuBar.isMenuBarOpen,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateSideBarViewContent: (content: string) => dispatch(updateViewContent(content)),
    toggleMenuBar: () => dispatch(toggleMenuBar()),
    toggleSideBar: () => dispatch(toggleSideBar()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
