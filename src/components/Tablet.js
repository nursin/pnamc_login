import React from 'react'

function Tablet({title, subtitle, color}) {
  return (
    <div className='tablet border border text-center rounded mb-4'>
        <h6 className='text-secondary mt-3'>{title}</h6>
        <p className='text-black fs-5'>{subtitle}</p>
    </div>
  )
}

export default Tablet