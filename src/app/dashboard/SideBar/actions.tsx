export const types = {
  UPDATE_VIEW_CONTENT: '[sidebar] UPDATE_SIDE_BAR_VIEW_CONTENT',
};

export const updateViewContent = (content: string) => {
  return {
      type: types.UPDATE_VIEW_CONTENT,
      content,
  };
};
