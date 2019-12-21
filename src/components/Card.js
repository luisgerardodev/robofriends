import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;