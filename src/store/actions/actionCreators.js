import * as actionTypes from "./actionTypes";

export const lightTheme = () => {
  return {
    type: actionTypes.LIGHT_THEME,
  };
};

export const darkTheme = () => {
  return {
    type: actionTypes.DARK_THEME,
  };
};

export const themeSelect = (subTheme) => {
  return {
    type: actionTypes.THEME_SELECT,
    payload: subTheme,
  };
};

export const incrementFont = (fontSize) => {
  return {
    type: actionTypes.INCREMENT_FONT,
    payload: fontSize,
  };
};

export const decrementFont = (fontSize) => {
  return {
    type: actionTypes.DECREMENT_FONT,
    payload: fontSize,
  };
};
