import React, { useState } from 'react';
import List from '../listComponent/list';
import Input from '../inputComponent/input';
import useTodostate from '../useTodostate';

let active;

const Main = () => {
  const {
    todos,
    addTodo,
    deleteTodo,
    setTodo,
    deletedelement,
    allelement,
    activeelement,
  } = useTodostate([]);

  if (activeelement.length === 0) {
    active = allelement;
  } else {
    active = activeelement;
  }




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
        deleteTd={deleteTodo}
        set={setTodo}
        deletedelements={deletedelement}
        allelements={allelement}
        activeelements={active}
      />
    </div>
  );
};

export default Main;