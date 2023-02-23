import React from 'react'
import { Button } from 'reactstrap'

function ProductCard({donationType, donationPrice, donationImage}) {
    return (
        <div className='boardMemberCard shadow round bg-primary text-center m-3 p-1'>
            <img className='contact__presidentImage my-3 bg-white' src={donationImage} />
            <p className='pb-2'>{donationType}<br />${donationPrice}</p>
            <Button className='mb-2 bg-danger'>Add to cart</Button>
        </div>
    )
}

export default ProductCard