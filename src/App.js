import React from 'react';
import Navbar from './layout/Navbar';
import Main from './routes';

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
