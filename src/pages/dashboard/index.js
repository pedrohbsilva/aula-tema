import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useAuth } from '../../context';
import Header from '../../components/header'
import { useSwitchTheme } from '../../context/themeContext'

function Dashboard() {
  const history = useHistory();
  const { signOut } = useAuth()
  const { state } = useSwitchTheme()
  function handleLogout() {
    signOut()
    history.replace('/')
  }
  return (
    <div style={{
      margin: 0, 
      backgroundColor: state.darkMode ? '#011111' : '#ffffff', 
      width: '100%', 
      height: '100vh'
    }}>
      <Header title="Dashboard" />

      <Link to="/about">Ir para About</Link>
      <button type="button" onClick={() =>
        handleLogout()}>
        Deslogar
      </button>
    </div>
  )
}

export default Dashboard