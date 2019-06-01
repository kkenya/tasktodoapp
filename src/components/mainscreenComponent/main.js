import React from 'react';
import List from '../listComponent/list';
import Input from '../inputComponent/input';
import useTodostate from '../useTodostate';

let finallyactive;

const Main = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
    set,
    completed,
    active,
  } = useTodostate([]);

  if (active.length === 0) {
    finallyactive = todos;
  } else {
    finallyactive = active;
  }

  // console.log(returnCompleted);

  return (
    <div>
      <Input
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <List
        todos={todos}
        toggleTodo={toggleTodo}
        set={set}
        all={todos}
        completed={completed}
        active={finallyactive}
      />
    </div>
  );
};

export default Main;