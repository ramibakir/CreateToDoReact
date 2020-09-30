import React from 'react';

const CompletedListItem = (todos) => (
  <>
    <tr>
      <td>{todos.title}</td>
      <td>{todos.description}</td>
      <td>{todos.author}</td>
      <td>{todos.date}</td>
    </tr>
  </>
);

export default CompletedListItem;
