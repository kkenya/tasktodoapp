import React from 'react';

const List = ({
  todos,
  toggleTodo,
  set,
  all,
  active,
  completed,
}) => {
  // console.log(todos);

  const listItems = todos.map((todo) =>
    <li
      key={todo.id}
      // onClick={() => console.log(todo.id)}
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
      <button onClick={() => set(completed)}>完了</button>
      <button onClick={() => set(all)}>全て</button>
      <button onClick={() => set(active)}>未完了</button>
    </div>
  );
}


export default List;
