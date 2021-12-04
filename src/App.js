import './App.css';
import 'instantsearch.css/themes/satellite.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Dbl from './components/Dbl';

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/dbl" element={<Dbl />} />
        </Routes>
      </div>
    );
}

export default App;
