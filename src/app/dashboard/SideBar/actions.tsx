export const types = {
  UPDATE_VIEW_CONTENT: '[sidebar] UPDATE_SIDE_BAR_VIEW_CONTENT',
  TOGGLE_SIDE_BAR: '[sidebar] TOGGLE_SIDE_BAR',
};

export const updateViewContent = (content: string) => {
  return {
      type: types.UPDATE_VIEW_CONTENT,
      content,
  };
};

export const toggleSideBar = () => {
  return {
      type: types.TOGGLE_SIDE_BAR,
  };
};
