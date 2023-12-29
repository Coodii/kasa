import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './ErrorPage.css'

function ErrorPage() {
  return (
    <div>
        <Header/>
          <main>
            <h1 className='error_status'>404</h1>
            <p className='error_message'>Oups! La page que vous demandez n'existe pas</p>
            <a className='error_link' href='/'>Retourner sur la page d’accueil</a>
          </main>
        <Footer/>
    </div>
  )
}

export default ErrorPage