import React from 'react';
import List from '../listComponent/list';
import Input from '../inputComponent/input';
import useTodostate from '../useTodostate';

let finallyactive;

const Main = () => {
  const {
    todos,
    history,
    filtered,
    addTodo,
    toggleTodo,
filterCompleted,
    set,
    active,
  } = useTodostate([]);

  if (active.length === 0) {
    finallyactive = history;
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
        history={history}
        toggleTodo={toggleTodo}
        set={set}
        active={finallyactive}
        filterCompleted={filterCompleted}
      />
    </div>
  );
};

export default Main;