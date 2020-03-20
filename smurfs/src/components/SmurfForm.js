import React, { useContext, useState } from 'react';
import styled from '@emotion/styled'

import FormContext from '../contexts/FormContext';

const FormContainer = styled.form`
    width: 40%;
    margin: 2% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    padding: 2%;
    h2 {
        margin: 0 0 2%;
    }
    .line {
        width: 100%;
        display: flex;
        justify-contents: space-between;
        margin-bottom: 2%;
        label {
            text-align: right;
            width: 30%;
            padding-right: 5px;
        }
        input {
            width: 50%;
        }
    }
`

const SmurfForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(undefined);
    const [height, setHeight] = useState('');
    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleAge = (event) => {
        setAge(parseInt(event.target.value));
    }
    const handleHeight = (event) => {
        setHeight(event.target.value);
    }
    const { postSmurf } = useContext(FormContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        postSmurf({ name, age, height: `${height}cm` });
        setName('');
        setAge(undefined);
        setHeight('');
    }
    return (
        <FormContainer onSubmit={handleSubmit}>
            <h2>Add A Smurf</h2>
            <div className='line'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' autoComplete='off' value={name} onChange={handleName}/>
            </div>
            <div className="line">
                <label htmlFor='age'>Age:</label>
                <input type='number' name='age' id='age' autoComplete='off' value={age} onChange={handleAge}/>
            </div>
            <div className="line">
                <label htmlFor='height'>Height:</label>
                <input type='number' name='height' id='height' autoComplete='off' value={height} onChange={handleHeight}/>
            </div>
            <input type='submit' />
        </FormContainer>
    )
}

export default SmurfForm;