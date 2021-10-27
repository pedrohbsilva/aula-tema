import React from 'react';
import { useSwitchTheme } from '../../context/themeContext'

function Header({ title }) {
  const { state, dispatch } = useSwitchTheme()
  const { darkMode } = state

  function handleClick() {
    darkMode
      ? dispatch({ type: "LIGHTMODE" })
      : dispatch({ type: "DARKMODE" });
  }

  return (
    <header style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      borderBottom: `1px solid ${darkMode ? 'white' : 'black'}`,
      alignItems: 'center'
    }}>
      <h1
        style={{ color: darkMode ? 'white' : 'black' }}
      >
        {title}
      </h1>
      <button
        type="button"
        onClick={() => handleClick()}
      >
        Trocar de cor
      </button>
    </header>
  )
}

export default Header