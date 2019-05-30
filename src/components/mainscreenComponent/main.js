import React, { useState } from 'react';
import List from '../listComponent/list';
import Input from '../inputComponent/input';
import useTodostate from '../useTodostate';

const Main = () => {
  const { todos, addTodo, deleteTodo } = useTodostate([]);

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
      <List todos={todos} deleteTd={deleteTodo} />
    </div>
  );
};

export default Main;