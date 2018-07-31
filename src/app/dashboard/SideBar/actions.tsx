export const types = {
  UPDATE_VIEW_CONTENT: '[sidebar] UPDATE_SIDE_BAR_VIEW_CONTENT',
  TOGGLE_SIDEBAR: '[sidebar] TOGGLE_SIDEBAR',
};

export const updateViewContent = (content: string) => {
  return {
      type: types.UPDATE_VIEW_CONTENT,
      content,
  };
};

export const toggleSideBar = () => {
  return {
      type: types.TOGGLE_SIDEBAR,
  };
};
