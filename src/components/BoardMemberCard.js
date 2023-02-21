import React from 'react'

function BoardMemberCard({title, name, image}) {
    return (
        <div className='boardMemberCard shadow round bg-primary text-center m-3 p-1'>
            <img className='contact__presidentImage my-3 bg-white' src={image} />
            <p className='pb-2'>{title}<br />{name}</p>
        </div>
    )
}

export default BoardMemberCard