import React from 'react';

const Button = () => {
  
  const handleClick = () => {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    alert(`El número aleatorio es: ${randomValue}`);
  };

  return (
    <button onClick={handleClick}>
      ¡Haz clic para un número aleatorio!
    </button>
  );
};

export default Button;