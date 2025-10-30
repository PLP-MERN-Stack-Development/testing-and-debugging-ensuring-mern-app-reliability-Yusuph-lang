import React from 'react';
import Button from './components/Button';

function App() {
  const handleClick = () => alert('Button clicked!');
  return (
    <div>
      <h1>MERN Testing Assignment</h1>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
}

export default App;
