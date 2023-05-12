import React from 'react'
import Header from '../../components/Header/Header'

function ErrorPage() {
  return (
    <div>
        <Header/>
        <p>404</p>
        <p>Oups! La page que vous demandez n'existe pas</p>
    </div>
  )
}

export default ErrorPage