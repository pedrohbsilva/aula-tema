import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useAuth } from '../../context';
function Dashboard() {
  const history = useHistory();
  const { signOut } = useAuth()

  function handleLogout(){
    signOut()
    history.replace('/')
  }
  return (
    <>
      <h1>
        Home
    </h1>
      <Link to="/about">Ir para About</Link>
      <button type="button" onClick={() => 
        handleLogout()}>
        Deslogar
      </button>
    </>
  )
}

export default Dashboard