import { TOGGLE_DARK_MODE } from "../actions/darkModeActions";

const initialState = {
  enabled: localStorage.theme === "dark" ? true : false,
};

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        enabled: !state.enabled,
      };
    default:
      return state;
  }
};

export default darkModeReducer;
