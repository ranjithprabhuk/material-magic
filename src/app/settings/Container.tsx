import { connect } from 'react-redux';
import { Color } from '@material-ui/core';
import { IAppState } from '../../Model';
import Settings from './Settings';
import { updatePrimaryColor, updateSecondaryColor } from './actions';

const mapStateToProps = (state: IAppState) => {
  return {
    currentTheme: state.theme,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updatePrimaryColor: (color: Color) => dispatch(updatePrimaryColor(color)),
    updateSecondaryColor: (color: Color) => dispatch(updateSecondaryColor(color)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
