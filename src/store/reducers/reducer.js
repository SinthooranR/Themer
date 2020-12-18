import * as actionTypes from "../actions/actionTypes";

const initialState = { theme: false, subTheme: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIGHT_THEME:
      return {
        ...state,
        theme: false,
      };

    case actionTypes.DARK_THEME:
      return {
        ...state,
        theme: true,
      };

    case actionTypes.THEME_SELECT:
      return {
        ...state,
        subTheme: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
