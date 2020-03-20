import React, { useState, useEffect } from "react";

import axios from 'axios';

import "./App.css";

import SmurfContext from '../contexts/SmurfContext';

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get('http://localhost:3333/smurfs')
        .then((response) => setData(response.data))
    }, [])
    return (
      <SmurfContext.Provider value={data}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
        </div>
      </SmurfContext.Provider>
    );
}

export default App;
