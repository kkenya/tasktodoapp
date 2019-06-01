import React from 'react';

const List = ({
  todos,
  history,
  toggleTodo,
  set,
  active,
  filterCompleted,
}) => {
  const listItems = todos.map((todo) =>
    <li
      key={todo.id}
      onClick={() => toggleTodo(todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}
    >
      {todo.text}
    </li>
  );

  return (
    <div>
      <ul>
        {listItems}
      </ul>
      <button onClick={filterCompleted}>完了</button>
      <button onClick={() => set(history)}>全て</button>
      <button onClick={() => set(active)}>未完了</button>
    </div>
  );
}


export default List;
