import React, { useState } from 'react';

const SmurfForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(undefined);
    const [height, setHeight] = useState('');
    handleName = (event) => {
        setName(event.target.value);
    }
    handleAge = (event) => {
        setAge(event.target.value);
    }
    handleHeight = (event) => {
        setHeight(event.target.value);
    }
    return (
        <form>
            <label htmlFor='name'>Name:
                <input type='text' name='name' id='name' autoComplete='off' onChange={handleName}/>
            </label>
            <label htmlFor='age'>Age:
                <input type='number' name='age' id='age' autoComplete='off' onChange={handleAge}/>
            </label>
            <label htmlFor='height'>Height:
                <input type='number' name='height' id='height' autoComplete='off' onChange={handleHeight}/>
            </label>
        </form>
    )
}