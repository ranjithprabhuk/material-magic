import { types } from './actions';
import { IMenuBarReduxState } from './IMenuBar';

const defaultState: IMenuBarReduxState = {
  isMenuBarOpen: false,
};

const menuBar = (state: IMenuBarReduxState = defaultState, action: any): IMenuBarReduxState => {
  switch (action.type) {
    case types.TOGGLE_MENU_BAR: {
      return {...state, isMenuBarOpen: !state.isMenuBarOpen};
    }
    default: {
      return state;
    }
  }
};

export default menuBar;
