import React from 'react';

const List = ({ todos, deleteTd }) => {
  const listItems = todos.map((todo, index) =>
    <div>
      <li key={index}>{todo}</li>
      <button onClick={() => deleteTd(index)}>delete</button>
    </div>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}


export default List;
