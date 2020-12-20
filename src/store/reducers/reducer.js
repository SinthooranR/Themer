import * as actionTypes from "../actions/actionTypes";

const initialState = { theme: false, subTheme: "", font:"", fontSize: 20 };

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
      
    case actionTypes.FONT_SELECT:
      return {
        ...state,
        font: action.payload,
      };

    case actionTypes.INCREMENT_FONT:
      return {
        ...state,
        fontSize: action.payload + 2,
      };

    case actionTypes.DECREMENT_FONT:
      return {
        ...state,
        fontSize: action.payload - 2,
      };

    default:
      return state;
  }
};

export default reducer;
