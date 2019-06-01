import React from 'react';
import List from '../listComponent/list';
import Input from '../inputComponent/input';
import useTodostate from '../useTodostate';

const Main = () => {
  const {
    todos,
    addTodo,
    toggleCompleted,
    filterCompleted,
    filterNotCompleted,
    getHistory,
  } = useTodostate([]);

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
        toggleCompleted={toggleCompleted}
        filterCompleted={filterCompleted}
        filterNotCompleted={filterNotCompleted}
        getHistory={getHistory}
      />
    </div>
  );
};

export default Main;