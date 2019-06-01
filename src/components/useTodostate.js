import React, { useState } from 'react';

let initialid = 0;

const useTodostate = () => {
  const [todos, setTodos] = useState([]);
  const [history, setHistory] = useState([]);
  const [active, setActive] = useState([]);

  return {
    todos,
    history,
    active,
    addTodo: todoText => {
      const todo = {
        // id: Date.now(),
        id: initialid++,
        text: todoText,
        completed: false,
      };

      setTodos([
        ...todos,
        todo,
      ]);
      setHistory([
        ...history,
        todo,
      ]);
    },
    toggleTodo: id => {
      const toggled = history.map(todo =>
        (todo.id === id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
      setHistory(toggled);
      setTodos(toggled);
      const active = history.filter(t => t.completed === false)
      setActive(active);
    },
    filterCompleted: () => {
      const completed = history.filter(t => t.completed === true);
      setTodos(completed);
    },
    set: todos => {
      setTodos(todos);
    }
  };

};

export default useTodostate;
