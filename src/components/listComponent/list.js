import React from 'react';

const List = ({ todos, deleteTd, set, deletedelements, allelements, activeelements }) => {
  const listItems = todos.map((todo, index) =>
    <div>
      <li key={index}>{todo}</li>
      <button onClick={() => deleteTd(index)}>delete</button>
    </div>
  );
  return (
    <div>
      <ul>
        {listItems}
      </ul>
      <button onClick={() => set(deletedelements)}>完了</button>
      <button onClick={() => set(allelements)}>全て</button>
      <button onClick={() => set(activeelements)}>未完了</button>
    </div>
  );
}


export default List;
