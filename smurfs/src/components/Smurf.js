import React, { useContext } from 'react';

import SmurfContext from '../contexts/SmurfContext';

const Smurf = (props) => {
    const { deleteSmurf } = useContext(SmurfContext);
    const removeSmurf = () => {
       deleteSmurf(props.id);
    }
    return (
        <div className="smurfCard">
            <h2 className='name'>{props.name}</h2>
            <p className='age'>{props.age}</p>
            <p className='height'>{props.height}</p>
            <button type='button' onClick={removeSmurf}>Delete Smurf</button>
        </div>
    )
}

export default Smurf;