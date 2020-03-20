import React, { useContext } from 'react';
import styled from '@emotion/styled';

import SmurfContext from '../contexts/SmurfContext';

const SmurfContainer = styled.div`
    width: 20%;
    border: 1px solid black;
    border-radius: 5px;
    padding: 1% 2%;
    background-color: #0f76c2;
    color: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

const Smurf = (props) => {
    const { deleteSmurf } = useContext(SmurfContext);
    const removeSmurf = () => {
       deleteSmurf(props.id);
    }
    return (
        <SmurfContainer className="smurfCard">
            <h2 className='name'>{props.name}</h2>
            <p className='age'>Age: {props.age}</p>
            <p className='height'>Height: {props.height}</p>
            <button type='button' onClick={removeSmurf}>Delete Smurf</button>
        </SmurfContainer>
    )
}

export default Smurf;