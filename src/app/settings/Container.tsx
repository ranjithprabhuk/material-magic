import { connect } from 'react-redux';
import { Color } from '@material-ui/core';
import { IAppState } from '../../Model';
import Settings from './Settings';
import { updatePrimaryColor } from './actions';

const mapStateToProps = (state: IAppState) => {
  return {
    currentTheme: state.theme,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updatePrimaryColor: (color: Color) => dispatch(updatePrimaryColor(color)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
