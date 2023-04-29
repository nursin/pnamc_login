import React from 'react'
import { Button } from 'reactstrap'

function ProductCard({title, price, buttonText}) {

    const handleClick = () => {
        alert("selected")
    }
    return (
        <div onClick={handleClick} className='productCard shadow round bg-primary text-center m-3'>
            <p className='py-2'>{title}<br />${price}</p>
            <Button className='mb-2 bg-danger'>{buttonText}</Button>
        </div>
    )
}

export default ProductCard