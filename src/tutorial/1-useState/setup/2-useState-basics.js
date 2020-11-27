import React, { useState } from 'react';

const UseStateBasics = () => {
  
  const [text, setText] = useState('random title')

  const handleClick = () => {
    text === 'random title' ? setText('Hello world') : setText('random title')
  }
  
  return (
    <>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>Change title</button>
    </>
  )
};

export default UseStateBasics;
