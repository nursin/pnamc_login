import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='errorPage'>
      <h1 className='text-black'>Ohh No! That page does not exists</h1>
      <Link to="/" className='text-primary'>Go to hompage</Link>
    </div>
  )
}

export default ErrorPage