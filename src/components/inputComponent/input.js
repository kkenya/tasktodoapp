import React from 'react';
import useInputstate from '../useInputstate';

const Input = ({ saveTodo }) => {
  const { value, onChange } = useInputstate();

  return (
    <div>
      <input
        type="text"
        onChange={onChange}
      />
      <button onClick={event => {
        event.preventDefault();
        saveTodo(value);
      }}>add</button>
    </div>
  );

};

export default Input;
