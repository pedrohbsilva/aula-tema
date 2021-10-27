import React from 'react'
import Routes from './routes'
import { AuthProvider } from './context'
import { ThemeProvider } from "./context/themeContext";
import './app.css'
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
