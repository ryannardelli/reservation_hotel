import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/teste')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((e) => console.log(e));
  });
  return (
    <div className="container">
      <h1>React + Node + MySQL</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
