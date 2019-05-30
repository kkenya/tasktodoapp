import React, { useState } from 'react';

export default initialTodo => {
  const [todos, setTodos] = useState(initialTodo);

  return {
    todos,
    addTodo: todoText => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: deleteIndex => {
      const deletedTodo = todos.filter((_, index) => index !== deleteIndex);
      setTodos(deletedTodo);
    },
  };

};
