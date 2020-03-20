import React, { useState, useEffect } from "react";

import axios from 'axios';

import "./App.css";

import SmurfContext from '../contexts/SmurfContext';
import Smurfs from './Smurfs';

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get('http://localhost:3333/smurfs')
        .then((response) => setData(response.data))
    }, [])
    return (
      <SmurfContext.Provider value={{ data }}>
        <Smurfs />
      </SmurfContext.Provider>
    );
}

export default App;
