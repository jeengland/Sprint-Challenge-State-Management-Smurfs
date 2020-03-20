import React, { useContext, useState } from 'react';

import FormContext from '../contexts/FormContext';

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
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:
                <input type='text' name='name' id='name' autoComplete='off' value={name} onChange={handleName}/>
            </label>
            <label htmlFor='age'>Age:
                <input type='number' name='age' id='age' autoComplete='off' value={age} onChange={handleAge}/>
            </label>
            <label htmlFor='height'>Height:
                <input type='number' name='height' id='height' autoComplete='off' value={height} onChange={handleHeight}/>
            </label>
            <input type='submit' />
        </form>
    )
}

export default SmurfForm;