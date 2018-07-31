import { types } from './actions';
import { ISideBarReduxState } from './ISideBar';

const defaultState: ISideBarReduxState = {
  viewContent: '',
  isSideBarOpen: false,
};

const sideBar = (state: ISideBarReduxState = defaultState, action: any): ISideBarReduxState => {
  switch (action.type) {
    case types.UPDATE_VIEW_CONTENT: {
      return { ...state, viewContent: action.content };
    }
    case types.TOGGLE_SIDE_BAR: {
      return {...state, isSideBarOpen: !state.isSideBarOpen};
    }
    default: {
      return state;
    }
  }
};

export default sideBar;
