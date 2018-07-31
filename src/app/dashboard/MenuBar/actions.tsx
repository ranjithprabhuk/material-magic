export const types = {
  TOGGLE_MENU_BAR: '[menubar] TOGGLE_MENU_BAR',
};

export const toggleMenuBar = () => {
  return {
      type: types.TOGGLE_MENU_BAR,
  };
};
