import React from 'react';

const List = ({
  todos,
  toggleCompleted,
  filterCompleted,
  filterNotCompleted,
  getHistory,
}) => {
  const listItems = todos.map((todo) =>
    <li
      key={todo.id}
      onClick={() => toggleCompleted(todo.id)}
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
      <button onClick={getHistory}>全て</button>
      <button onClick={filterNotCompleted}>未完了</button>
    </div>
  );
}


export default List;
