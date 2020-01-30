import React from 'react';
import Header from './components/header';
import GameBoard from './components/gameboard';
function App() {
  return (
    <div className="container-fluid m-auto p-1 border">


      <div className="container-fluid">
        <Header />

        <GameBoard />
      </div>

    </div>
  );
}

export default App;
