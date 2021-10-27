import React, { createContext, useContext, useReducer } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}

const initialState = {
  darkMode: false,
};

function themeReducer(state, action) {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

function useSwitchTheme() {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useSwitchTheme }