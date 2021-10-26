import React from 'react'
import { useAuth } from '../../context'

function SignIn() {
  const { signIn } = useAuth()
  return (
    <>
      <h1>
        SignIn
      </h1>
      <button type="button" onClick={() =>
        signIn({ email: 'jhon@teste.com', password: "jhonteste" })}>
        Logar
      </button>


    </>
  )
}

export default SignIn