import React, { useContext } from 'react';

import Smurf from './Smurf';

import SmurfContext from '../contexts/SmurfContext';

const Smurfs = () => {
    const { data } = useContext(SmurfContext);
    return (
        <div className='smurfs'>
            {data.map((smurf) => {
                return (
                    <Smurf key={`${smurf.id}`} { ...smurf } />
                )
            })}
        </div>
    )
}

export default Smurfs;