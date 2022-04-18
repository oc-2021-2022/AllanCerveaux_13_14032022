import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <section className="error main bg-dark">
      <div className='error-message'>
        <h1 className='error-code'>404</h1>
        <p>La page que vous demandez n'existe pas</p>
      </div>
      <Link to="/">Retourner sur la page d'acceuil</Link>
    </section>
  )
}
