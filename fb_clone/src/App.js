import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';

// The main app component
function App() {
  const user = null;

  return (
    // Wrapping everyting in a data layer using React Context API
    
    <div className="app">
      {!user ? (
        <Login />
        ) : (
          <>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
          </>
        )}
    </div>
  );
}

export default App;
