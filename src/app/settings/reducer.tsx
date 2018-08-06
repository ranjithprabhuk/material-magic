import { types } from './actions';
import { ThemeConfig } from '../../theme';

const defaultState = {...ThemeConfig};

const themeSettings = (state = defaultState, action: any) => {
  switch (action.type) {
    case types.UPDATE_PRIMARY_THEME_COLOR: {
      ThemeConfig.primaryColor = action.color;
      return { ...state, primaryColor: action.color };
    }
    case types.UPDATE_SECONDARY_THEME_COLOR: {
      ThemeConfig.secondaryColor = action.color;
      return { ...state, secondaryColor: action.color };
    }
    default: {
      return state;
    }
  }
};

export default themeSettings;
