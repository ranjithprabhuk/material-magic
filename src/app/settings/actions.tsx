import { Color } from '@material-ui/core';

export const types = {
  UPDATE_PRIMARY_THEME_COLOR: '[settings] UPDATE_PRIMARY_THEME_COLOR',
  UPDATE_SECONDARY_THEME_COLOR: '[settings] UPDATE_SECONDARY_THEME_COLOR',
};

export const updatePrimaryColor = (color: Color) => {
  return {
      type: types.UPDATE_PRIMARY_THEME_COLOR,
      color,
  };
};

export const updateSecondaryColor = (color: Color) => {
  return {
      type: types.UPDATE_SECONDARY_THEME_COLOR,
      color,
  };
};
