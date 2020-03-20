import React, { useContext } from 'react';
import styled from '@emotion/styled';

import Smurf from './Smurf';

import SmurfContext from '../contexts/SmurfContext';

const SmurfsContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Smurfs = () => {
    const { data } = useContext(SmurfContext);
    return (
        <SmurfsContainer className='smurfs'>
            {data.map((smurf) => {
                return (
                    <Smurf key={`${smurf.id}`} { ...smurf } />
                )
            })}
        </SmurfsContainer>
    )
}

export default Smurfs;