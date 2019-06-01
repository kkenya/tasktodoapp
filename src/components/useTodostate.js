import React, { useState } from 'react';

let initialid = 0;

const useTodostate = () => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [active, setActive] = useState([]);

  return {
    todos,
    completed,
    active,
    addTodo: todoText => {
      setTodos([
        ...todos,
        {
          // id: Date.now(),
          id: initialid++,
          text: todoText,
          completed: false,
        }
      ]);
    },
    toggleTodo: id => {
      console.log(id);
      const toggled = todos.map(todo =>
        (todo.id === id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
      setTodos(toggled);
      const active = todos.filter(t => t.completed === false)
      setActive(active);
      const completed = todos.filter(t => t.completed === true)
      setCompleted(completed);
    },
    set: element => {
      setTodos(element);
    }
  };

};

export default useTodostate;
