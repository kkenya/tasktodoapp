import React from 'react';

const List = ({
  todos,
  toggle,
}) => {
  console.log(todos);
  const listItems = todos.map((todo) =>
    <div>
      <li key={todo.id} style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}>
        <button onClick={() => toggle(todo.id)}>{todo.text}</button>
      </li>
    </div>
  );
  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}


export default List;
