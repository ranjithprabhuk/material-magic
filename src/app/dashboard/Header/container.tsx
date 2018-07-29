import { connect } from 'react-redux';
import { IAppState } from '../../../Model';
import Header from './Header';
import { updateViewContent } from '../SideBar';

const mapStateToProps = (state: IAppState) => {
  return {
    currentSideBarContentView: state.sideBar.viewContent,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateSideBarViewContent: (content: string) => dispatch(updateViewContent(content)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
