import { types } from './actions';
import { ThemeConfig } from '../../theme';

const defaultState = {...ThemeConfig};

const themeSettings = (state = defaultState, action: any) => {
  switch (action.type) {
    case types.UPDATE_PRIMARY_THEME_COLOR: {
      return { ...state, primaryColor: action.color };
    }
    default: {
      return state;
    }
  }
};

export default themeSettings;
