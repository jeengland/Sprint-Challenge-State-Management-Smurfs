import React from 'react';

const Smurf = (props) => {
    return (
        <div className="smurfCard">
            <h2 className='name'>{props.name}</h2>
            <p className='age'>{props.age}</p>
            <p className='height'>{props.height}</p>
        </div>
    )
}

export default Smurf;