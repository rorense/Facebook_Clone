import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__body'>
        <Sidebar />
        {/* Middle Feed Component */}
        {/* Right side Widget component */}
      </div>
    </div>
  );
}

export default App;
