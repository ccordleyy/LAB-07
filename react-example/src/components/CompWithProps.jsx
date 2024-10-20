import React, { useState } from 'react';

const CompWithProps = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>CompWithProps Component</h2>
      <input type="text" value={text} onChange={handleChange} placeholder="Escribe algo..." />
      <p>User: {text}</p>
    </div>
  );
};

export default CompWithProps;
