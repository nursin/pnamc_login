import React from 'react'

function Tablet({title, subtitle, color}) {
  return (
    <div className='tablet text-center rounded minor-shadow border'>
        <h6 className='mt-3 text-secondary'>{title}</h6>
        <p className={'fs-5 ' + (color === "red" ? 'text-danger' : 'text-success')}>{subtitle}</p>
    </div>
  )
}

export default Tablet