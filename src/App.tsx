import React from 'react';

import Hero from './components/Hero';
import NavBar from './components/NavBar';

import './App.css';

const App = () => {
  return (
    <div className='m-auto bg-black m-auto antialised font-sans text-white'>
      <Hero />
      <NavBar />

      
    </div>
  );
}

export default App;
