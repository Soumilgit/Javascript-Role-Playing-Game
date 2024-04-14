import React from 'react';
import ReactDOM from 'react-dom';
import GameApp from './GameApp'; // Import the React component

// Render the React component inside the #game-container div
import React, { useState } from 'react';

const GameApp = () => {
  const [activeUsers, setActiveUsers] = useState(null);
  const [value, setValue] = useState(0);

  // Lifecycle method to place API calls or any calls to your server
  // Automatically triggers update upon receiving data
  React.useEffect(() => {
    setTimeout(() => {
      setActiveUsers(1273);
    }, 2500);
  }, []);

  const OnlyEvens = ({ value }) => {
    // This component renders only if the value is even
    if (value % 2 === 0) {
      console.log('Component re-rendered.');
      return <h1>{value}</h1>;
    } else {
      return null;
    }
  };

  const Controller = () => {
    // Function to increment the value
    const addValue = () => {
      setValue(prevValue => prevValue + 1);
    };

    return (
      <div>
        <button onClick={addValue}>Add</button>
        <OnlyEvens value={value} />
      </div>
    );
  };

  return (
    <div>
      <h1>Active Users: {activeUsers}</h1>
      <Controller />
    </div>
  );
};

export default GameApp;

ReactDOM.render(
  <React.StrictMode>
    <GameApp />
  </React.StrictMode>,
  document.getElementById('game-container')
);
