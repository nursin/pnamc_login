import React from 'react'
// import { useNavigate } from "react-router-dom";

function ItemButton({title, image, dateTime, newsLink}) {
    // const navigate = useNavigate();

    // const handleSubmit = () => {
    //     navigate("/")
    // }
    return (
        <a href={newsLink} className='itemButton__row d-flex justify-content-center align-items-center m-1 p-1' target="_blank" rel="noreferrer">
            <img className='itemButton__image' src={image} />
            <div className='ms-3 '>
                <h3 className='text-black fs-5 m-0'>{title}</h3>
                <p className='text-black fs-6 m-0'>{dateTime}</p>
            </div>
        </a>
    )
}

export default ItemButton