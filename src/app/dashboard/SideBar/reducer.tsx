import { types } from './actions';
import { ISideBarReduxState } from './ISideBar';

const defaultState: ISideBarReduxState = {
  viewContent: '',
};

const sideBar = (state: ISideBarReduxState = defaultState, action: any) => {
  switch (action.type) {
    case types.UPDATE_VIEW_CONTENT: {
      return { ...state, viewContent: action.content };
    }
    default: {
      return state;
    }
  }
};

export default sideBar;
