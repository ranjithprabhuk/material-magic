import { connect } from 'react-redux';
import { IAppState } from '../../../Model';
import Sidebar from './Sidebar';

const mapStateToProps = (state: IAppState) => {
  console.log('state', state);
  return {
    viewContent: state.sideBar.viewContent,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
