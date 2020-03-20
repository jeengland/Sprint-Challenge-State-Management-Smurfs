import React, { useState, useEffect } from "react";

import axios from 'axios';

import "./App.css";

import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

import SmurfContext from '../contexts/SmurfContext';

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get('http://localhost:3333/smurfs')
        .then((response) => setData(response.data))
    }, [])
    const postSmurf = (smurf) => {
      axios
        .post('http://localhost:3333/smurfs', smurf)
        .then((response) => console.log(response))
    }
    return (
      <SmurfContext.Provider value={{ data }}>
        <SmurfForm />
        <Smurfs />
      </SmurfContext.Provider>
    );
}

export default App;
