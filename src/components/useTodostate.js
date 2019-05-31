import React, { useState } from 'react';

export default initialTodo => {
  const [todos, setTodos] = useState(initialTodo);


  return {
    todos,
    addTodo: todoText => {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: todoText,
          completed: false,
        }
      ]);
    },
    toggleTodo: id => {
      todos.map(todo =>
        (todo.id === id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    },
  };


};
