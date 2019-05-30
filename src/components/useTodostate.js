import React, { useState } from 'react';

export default initialTodo => {
  const [todos, setTodos] = useState(initialTodo);
  const [allelement, setAllelement] = useState([]);
  const [deletedelement, setDeletedelement] = useState([]);
  const [activeelement, setActiveelement] = useState([]);

  return {
    todos,
    deletedelement,
    allelement,
    activeelement,
    addTodo: todoText => {
      setTodos([...todos, todoText]);
      setAllelement([...allelement, todoText]);
    },
    deleteTodo: deleteIndex => {
      const deletednewTodo = todos.filter((todo, index) => index !== deleteIndex);
      setActiveelement(deletednewTodo);
      setTodos(deletednewTodo);
      const deleted = todos.filter((todo, index) => index === deleteIndex);
      setDeletedelement([...deletedelement, deleted]);
    },
    setTodo: element => {
      setTodos(element);
    },
  };

};
