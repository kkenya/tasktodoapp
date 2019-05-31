import React, { useState } from 'react';

let initialid = 0;

export default initialTodo => {
  const [todos, setTodos] = useState(initialTodo);

  return {
    todos,
    addTodo: todoText => {
      setTodos([
        ...todos,
        {
          // id: Date.now(),
          id: initialid++,
          text: todoText,
          completed: false,
        }
      ])
    },
    toggleTodo: id => {
      console.log(id);
      const toggled = todos.map(todo =>
        (todo.id === id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
      setTodos(toggled);
    },
  };


};
