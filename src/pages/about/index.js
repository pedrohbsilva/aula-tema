import React from 'react'
import { useHistory } from 'react-router-dom'

function About() {
  const history = useHistory()

  return (
    <>
      <h1>
        About
    </h1>
      <button type="button" onClick={
        () => history.goBack()}>
        Voltar para home
      </button>

    </>
  )
}

export default About