import { useState } from 'react';

let initialid = 0;

const useTodostate = () => {
  const [todos, setTodos] = useState([]);
  const [history, setHistory] = useState([]);

  return {
    todos,
    history,
    addTodo: todoText => {
      const todo = {
        // id: Date.now(),
        id: initialid++,
        text: todoText,
        completed: false,
        deleted: false,
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
    toggleCompleted: id => {
      const toggled = history.map(todo =>
        (todo.id === id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
      setHistory(toggled);
      setTodos(toggled);
    },
    toggleDeleted: id => {
      const toggled = history.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            deleted: !todo.deleted
          };
        }
        return todo;
      });
      setHistory(toggled);
      setTodos(toggled);
    },
    filterCompleted: () => {
      const completed = history.filter(todo => todo.completed === true);
      setTodos(completed);
    },
    filterNotCompleted: () => {
      const completed = history.filter(todo => todo.completed === false);
      setTodos(completed);
    },
    getHistory: () => {
      setTodos(history);
    },
  };

};

export default useTodostate;
